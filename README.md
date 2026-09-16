This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Useful Links
[figma project](https://www.figma.com/design/ssdd5DmVcAvOxY3g5bYAzB/Grafica-Bitpolito-%E2%80%93-Website?node-id=248-8520&t=h6i8QT3Hiv1Peap8-1)

[old version - vercel](https://website-bit-politos-projects.vercel.app/en)

[new version - vercel](https://website-git-dev-bit-politos-projects.vercel.app/)

[db - google drive](https://drive.google.com/drive/folders/1sUirMe1Cr_P1dcA20sraaevpdkDZiiBr?usp=drive_link)

## Branches Structure
We use the dev branch as a staging branch, so all PR must be done toward that branch. Lastly they'll go in main. 
The branch called "landing" is the one that contains the old landing page (curently live at bitpolito.it).

## How to wok on an issue
When working on an issue you are gonna create a new branch and push on that, opening than a PR to merge from that branch to dev.

## Notion Database Integration

This website integrates with a Notion database to dynamically populate the chessboard and carousel components.

### Database Structure

The Notion database should have the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `Name` | Title | Name of the content item |
| `Content type` | Select | Type of content: Event, Podcast, Project, Other |
| `Content location` | Select | Where to display: Chessboard, Carousel |
| `Image` | Files | Image file to display |
| `Link` | URL | Link destination when clicked |
| `Date` | Date | Date of the content (used for sorting) |
| `Alt-textITA` | Rich text | Italian alt text for accessibility |
| `Alt-textENG` | Rich text | English alt text for accessibility |
| `Is Horizontal` | Checkbox | If checked, image occupies 2 spans (wide layout) |

### Field Mapping

- **Image** → Image displayed on the website
- **Link** → Redirect URL when image is clicked
- **Alt-textITA** → Italian alt text for accessibility
- **Alt-textENG** → English alt text for accessibility
- **Is Horizontal** → Controls layout: checked = 2 spans (wide), unchecked = 1 span (normal)

### Configuration

The Notion integration uses environment variables:
- **NOTION_TOKEN**: Your Notion integration token
- **NOTION_DATABASE_ID**: Your Notion database ID

#### Local Development
1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```
2. The `.env` file contains the Notion credentials for local development

#### Production/Preview Deploy

**Vercel:**
1. Go to your project in Vercel Dashboard
2. Settings → Environment Variables
3. Add these variables for all environments (Production, Preview, Development):
   ```
   NOTION_TOKEN = ntn_your_integration_token
   NOTION_DATABASE_ID = 27cae3dac7c4817da038df21ae8482f7
   ```

**GitHub Secrets (for GitHub Actions if needed later):**
1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add repository secrets:
   ```
   NOTION_TOKEN = ntn_your_integration_token
   NOTION_DATABASE_ID = 27cae3dac7c4817da038df21ae8482f7
   ```

**Other platforms:**
- **Netlify**: Site settings → Environment variables
- **Railway/Render**: Environment tab

### Layout Logic

- **Chessboard**: Shows items with `Content location = "Chessboard"`
- **Carousel**: Shows items with `Content location = "Carousel"`
- **Filtering**: Items are filtered by `Content type` (Event, Podcast, Project, Other)
- **Sorting**: Items are sorted by `Date` in ascending order (oldest first)
- **Horizontal Images**: Items with `Is Horizontal = true` occupy 2 spans in the grid

### Components Integration

Both components now fetch data dynamically from Notion:
- **Chessboard**: Uses `data.chessboard` from `/api/notion`
- **Carousel**: Uses `data.featured` from `/api/notion`
- **No hardcoded data**: All content is managed through the Notion database