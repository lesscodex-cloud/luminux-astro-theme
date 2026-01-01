# Luminux — Astro SaaS Theme

A polished Astro 5 theme for SaaS launches. Luminux ships a premium dark UI kit, content collections, and production-ready tooling so you can ship a landing page, blog, and pricing flow in one afternoon.

## Features

- Premium dark theme built with Tailwind CSS tokens and reusable section components
- TypeScript-first Astro project with strict mode, ESLint (flat), and Prettier
- Ready-to-use sections: hero, features, showcase, pricing, testimonials, FAQ, CTA, and navigation
- Blog powered by `astro:content` collections with pagination helpers
- SEO helpers (title/description templates, canonical + Open Graph utilities)
- Developer scripts for linting, formatting, checking types, building, and previewing

## Quickstart

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Run quality checks
   ```bash
   npm run lint
   npm run typecheck
   ```
4. Build for production
   ```bash
   npm run build
   ```

## Customization

### Branding, navigation, and pricing
Edit a single source of truth at `src/lib/site.ts` to update:

- Site identity: `name`, `url`, and `tagline`
- Navigation labels/links
- Social handles and contact email
- Hero CTA copy and highlight chips
- Pricing plans and feature bullets

### Styling

- Update `tailwind.config.mjs` tokens (colors, fonts, radii) to align with your brand.
- Global styles live in `src/styles`; component classes rely on Tailwind utilities.

### Content editing

- Blog posts live in `src/content/blog`. Add new Markdown or MDX files that follow the schema in `src/content/config.ts`.
- Use `src/lib/posts.ts` helpers for pagination and sorting if you add new blog-related pages.
- Static assets belong in `public/` and are copied to `dist/` on build.

## Deployment

1. Set the canonical site URL in `astro.config.mjs` or via `ASTRO_SITE` in your `.env` file.
2. Run `npm run build`.
3. Deploy the generated `dist/` folder to your host (Vercel, Netlify, Cloudflare Pages, or any static host).

## FAQ

**Does the theme work with React/Vue components?**  
Yes. Astro Islands let you add React, Vue, or Svelte where interactivity is needed.

**Can I switch to light mode?**  
The default styling is dark-first. Extend the Tailwind theme to introduce a light palette if needed.

**Is TypeScript required?**  
Yes—strict mode keeps the codebase consistent and maintainable.

**How do I avoid breaking changes?**  
Keep edits inside `src/lib/site.ts` for configuration and extend components with existing patterns to stay aligned with the shipped structure.

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── content/
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## License

This project is released under the MIT License. See [LICENSE](LICENSE).
