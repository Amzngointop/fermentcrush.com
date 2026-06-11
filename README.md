# FermentCrush

Expert home fermentation buying guides and tutorials. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run build
npm run start
```

## Development

```bash
npm run dev
```

## Project Structure

```
app/
  page.tsx                    # Homepage (3500+ words, 11 sections)
  best/[slug]/page.tsx        # Best-pick article pages (8 articles)
  guides/[slug]/page.tsx      # Guide article pages (4 guides)
  how-it-works/page.tsx       # Guides index
  the-lab/page.tsx            # Fermentation glossary (12 terms)
  culture-notes/page.tsx      # About/methodology
  write-to-us/page.tsx        # Contact
  sitemap.ts / robots.ts

components/                   # All reusable UI components
data/
  site.ts                     # Site config, nav, affiliate tag
  products.ts                 # 48 products (8 categories x 6)
  articles.ts                 # 8 best-pick article configs
  guides.ts                   # 4 guide article configs
```

## How to Update the Affiliate Tag

1. Open `data/site.ts` — update `affiliateTag`
2. Open `data/products.ts` — find/replace `YOURTAG-20` with your real tag

## How to Update Product Data

Edit `data/products.ts`. Each product object contains:
- `asin` — Amazon product ASIN (e.g. `B00AXBZSLO`)
- `affiliateUrl` — Full Amazon URL with your tag
- `imageUrl` — Amazon image URL (`m.media-amazon.com/images/I/...`)
- Editorial fields: `name`, `badge`, `summary`, `pros`, `cons`, `bestFor`, `howToUse`

## How to Add a New Article

1. Add article config to `data/articles.ts`
2. Add products for that slug to `data/products.ts`
3. Add article content (intro, buyingGuide, faq, tips, outboundLinks, relatedArticles) to the `articleContent` object in `app/best/[slug]/page.tsx`
4. Update `app/sitemap.ts` if needed (it auto-reads from `data/articles.ts`)

## Deployment (VPS + PM2 + Nginx)

```bash
# Build
npm run build

# Start with PM2
pm2 start npm --name "fermentcrush" -- start
pm2 save && pm2 startup
```

Nginx reverse proxy to `http://localhost:3000`.

```nginx
server {
    listen 80;
    server_name fermentcrush.com www.fermentcrush.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
