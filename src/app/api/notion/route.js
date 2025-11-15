import { Client } from '@notionhq/client';
import fs from 'fs/promises';
import path from 'path';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const cacheTTL = 60 * 60 * 24 * 1000; // 24 hrs in ms

const isVercel = process.env.VERCEL === "1"; // check if running on production Vercel environment

const cachePath = isVercel ? '/tmp/notionCache.json' : path.join(process.cwd(), './src/app/notionCache.json');

let cache = {
  data: null,
  timestamp: 0
};

async function loadCacheFromFile() {
  try {
    const json = await fs.readFile(cachePath, 'utf8');

    if (!json) {
      console.log("Cache file is empty, initializing empty cache.");
      return { chessboard: [], featured: [], timestamp: 0 };
    }

    return JSON.parse(json);
  } catch (error) {
    console.error("No existing cache file found: ", error);
    return { chessboard: [], featured: [], timestamp: 0 };
  }
}

async function saveCacheToFile(cacheData) {
  try {
    await fs.writeFile(cachePath, JSON.stringify(cacheData, null, 2), 'utf8');
    console.log("Cache saved to file.");
  } catch (error) {
    console.error("Error writing cache file: ", error);
  }
}

cache = await loadCacheFromFile();

export async function GET() {
  console.log("Received GET request for Notion data");
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      return Response.json({
        chessboard: [],
        featured: [],
        error: 'Missing Notion credentials'
      });
    }

    if (cache.data && Date.now() - cache.timestamp < cacheTTL) {
      return Response.json(cache.data, {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' }
      });
    }

    const response = await notion.search({
      query: '',
      filter: {
        property: 'object',
        value: 'page'
      },
      page_size: 100
    });

    const chessboardItems = [];
    const featuredItems = [];

    // Mescola casualmente i risultati
    const shuffledResults = response.results.sort(() => Math.random() - 0.5);

    shuffledResults.forEach((page) => {
      const properties = page.properties;

      // Estrai i dati dalle proprietà di Notion
      const contentType = properties['Content type']?.select?.name;
      const contentLocation = properties['Content location']?.select?.name;
      const image = properties.Image?.files?.[0]?.file?.url;
      const link = properties.Link?.url;
      const date = properties.Date?.date?.start;
      const altTextITA = properties['Alt-textITA']?.rich_text?.[0]?.text?.content || '';
      const altTextENG = properties['Alt-textENG']?.rich_text?.[0]?.text?.content || '';
      const name = properties.Name?.title?.[0]?.text?.content || '';
      const isHorizontal = properties['Is Horizontal']?.checkbox; // Campo checkbox

      // Filtra elementi senza immagine
      if (!image) {
        // console.log(`Skipping ${name}: no image specified`);
        return;
      }

      // Filtra elementi senza data
      if (!date) {
        // console.log(`Skipping ${contentType}:`, {
        //   hasImage: !!image,
        //   hasLink: !!link,
        //   hasDate: !!date,
        //   contentLocation: contentLocation,
        //   name: properties.Name?.title?.[0]?.text?.content || 'N/A'
        // });
        return; // Skip solo se manca la data
      }

      const item = {
        id: page.id,
        name,
        src: image, // Immagine mostrata
        link: link || '#', // Link a cui ridireziona se cliccato
        date,
        altTextITA, // Alt text in italiano
        altTextENG, // Alt text in inglese
        filter: contentType || 'others', // Manteniamo il case originale per i content type
        contentType,
        isHorizontal, // Controlla se l'immagine è orizzontale (2 spans)
      };

      // Logica basata su Content location
      if (contentLocation === 'Chessboard') {
        chessboardItems.push(item);
      } else if (contentLocation === 'Carousel') {
        featuredItems.push(item);
      }
    });

    cache = {
      data: {
        chessboard: chessboardItems,
        featured: featuredItems,
      },
      timestamp: Date.now(),
    };

    await saveCacheToFile(cache);

    return Response.json(cache.data, {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      },
    });
  } catch (error) {
    console.error('Error fetching from Notion:', error);
    return Response.json({
      chessboard: [],
      featured: [],
      error: error.message
    });
  }
}