import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const cacheTTL = 60 * 60 * 24 * 1000; // 24 hrs in ms

let cache = {
  data: null,
  timestamp: 0
};

export async function GET() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      return Response.json({
        chessboard: [],
        featured: [],
        error: 'Missing Notion credentials'
      });
    }

    if (cache.data && currentTimestamp - cache.timestamp < cacheTTL) {
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
    });

    const chessboardItems = [];
    const featuredItems = [];
    const shuffledResults = response.results.sort(() => Math.random() - 0.5);

    shuffledResults.forEach((page) => {
      const p = page.properties;

      const contentType = p['Content type']?.select?.name;
      const contentLocation = p['Content location']?.select?.name;
      const image = p.Image?.files?.[0]?.file?.url;
      const link = p.Link?.url;
      const date = p.Date?.date?.start;
      const altTextITA = p['Alt-textITA']?.rich_text?.[0]?.text?.content || '';
      const altTextENG = p['Alt-textENG']?.rich_text?.[0]?.text?.content || '';
      const name = p.Name?.title?.[0]?.text?.content || '';
      const isHorizontal = p['Is Horizontal']?.checkbox;

      if (!image || !date) return;

      const item = {
        id: page.id,
        name,
        src: image,
        link: link || '#',
        date,
        altTextITA,
        altTextENG,
        filter: contentType || 'others',
        contentType,
        isHorizontal,
      };

      if (contentLocation === 'Chessboard') chessboardItems.push(item);
      else if (contentLocation === 'Carousel') featuredItems.push(item);
    });

    cache = {
      data: {
        chessboard: chessboardItems,
        featured: featuredItems,
      },
      timestamp: Date.now(),
    };

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