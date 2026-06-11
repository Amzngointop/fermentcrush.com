# CLAUDE.md — FermentCrush Maintenance Guide

This document is for AI agents and future maintainers. Read before making changes.

## Architecture Overview

- **Framework**: Next.js 15+ App Router, TypeScript, Tailwind CSS
- **Data layer**: All content lives in `/data/` — never hardcode content in page files
- **Components**: Reusable in `/components/` — never duplicate UI logic in pages
- **Deployment**: VPS + PM2 + Nginx. Must pass `npm run build` before deployment.

## Critical Rules

### Never Break These

1. **Build must pass clean**: Run `npm run build` and fix ALL errors before committing. Zero tolerance for build errors.
2. **No prices**: Never add product prices anywhere on the site — Amazon prices change constantly.
3. **No fake claims**: Never add star ratings, personal testing claims, or fabricated user reviews.
4. **Affiliate tag**: The placeholder `YOURTAG-20` must be replaced with a real tag before going live.
5. **Image tags**: Use plain `<img>` tags for product images, not Next.js `<Image>` component. See `components/ProductCard.tsx`.

### Design Preservation

The site uses a warm artisan editorial design. Key design tokens:
- Background: `#FAFAF7` (primary), `#F3EDE3` (alt/parchment)
- Accent: `#2D5016` (deep forest green)
- Secondary accent: `#8B4513` (warm terracotta)
- Text: `#1A1A1A` (primary), `#5C5C5C` (secondary)
- Fonts: Cormorant Garamond (headings, weight 700/800), Lato (body, weight 400/600)
- 3D button shadow: `4px 4px 0px #1A3009` (hover: `6px 6px`, active press: `1px 1px`)

Do NOT: change fonts, use cold white (#fff) for backgrounds, add drop shadows on cards, change the green accent color.

### Content Rules

- All product `pros`, `cons`, `summary`, `bestFor`, `howToUse` must be original editorial writing
- Do not copy Amazon product descriptions
- Do not invent ratings or emoji score systems
- All buying guide content must cite authoritative sources (USDA, NIH, .edu)
- Affiliate disclosure must appear on every product-featuring page

## How to Add Products

1. Open `data/products.ts`
2. Add a new `Product` object with all required fields
3. Set `articleSlug` to match an existing article slug from `data/articles.ts`
4. Set `rank` to the position within that article (1 = Best Overall)
5. Write original `pros`, `cons`, `summary`, `bestFor`, `howToUse` — do not copy from Amazon

## How to Add a New Best-Pick Article

1. Add article config to `data/articles.ts` (slug, title, metaTitle, metaDescription, category, etc.)
2. Add 6 products for the new slug in `data/products.ts`
3. Add article content to `articleContent` object in `app/best/[slug]/page.tsx`:
   - `intro`: 150-200 word editorial intro
   - `buyingGuide`: 4 sections, each with title and 200+ word content
   - `faq`: 5-6 questions with 50-80 word answers
   - `tips`: 2 practical tips
   - `outboundLinks`: 2+ links to USDA/NIH/edu sources
   - `relatedArticles`: 2-3 other article slugs
4. Run `npm run build` to verify no errors

## How to Add a New Guide

1. Add guide config to `data/guides.ts`
2. Add guide content to `guideContent` object in `app/guides/[slug]/page.tsx`:
   - `sections`: 4 sections with id, heading, and content paragraphs
   - `tips`: 2 tips
   - `relatedArticles`: 2-3 article slugs
   - `outboundLinks`: 2 authoritative external links
3. Run `npm run build`

## Animation Safety Rule

All animations must follow the safe progressive enhancement pattern:
- Content is ALWAYS fully visible by default
- Never use `opacity-0` or `translate-y` that hides content before JS fires
- BubbleAnimation uses SVG CSS @keyframes — server-rendered, no JS dependency
- FermentationCalculator is `"use client"` — interactive widget only
- AccordionSection uses useState — `"use client"` component

## Deployment Checklist

1. Replace `YOURTAG-20` with real Amazon affiliate tag in `data/products.ts` and `data/site.ts`
2. Replace all `PLACEHOLDER` image URLs with real Amazon image URLs
3. Run `npm run build` — must pass with zero errors
4. Deploy build output; start with `npm run start` (or PM2)
5. Verify sitemap at `/sitemap.xml` and robots at `/robots.txt`
