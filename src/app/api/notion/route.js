import { Client } from '@notionhq/client';

const notion = new Client({
  auth: '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',
});

const DATABASE_ID = '27cae3dac7c4817da038df21ae8482f7';

export async function GET() {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      return Response.json({
        chessboard: [],
        featured: [],
        error: 'Missing Notion credentials'
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
        console.log(`Skipping ${name}: no image specified`);
        return;
      }

      // Filtra elementi senza data
      if (!date) {
        console.log(`Skipping ${contentType}:`, {
          hasImage: !!image,
          hasLink: !!link,
          hasDate: !!date,
          contentLocation: contentLocation,
          name: properties.Name?.title?.[0]?.text?.content || 'N/A'
        });
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

    return Response.json({
      chessboard: chessboardItems,
      featured: featuredItems
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