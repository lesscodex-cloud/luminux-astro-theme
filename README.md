# Luminux — Astro SaaS Theme

A production-ready Astro theme with TailwindCSS, TypeScript strict mode, ESLint, and Prettier. The layout ships with reusable blocks for SaaS-style landing pages and component-driven storytelling.

## Features

- Astro 5 with TypeScript strict configuration
- TailwindCSS tokens tuned for a premium dark theme
- ESLint (Flat config) + Prettier with Astro support
- Ready-to-use sections: hero, features, showcase, pricing, testimonials, FAQ, and CTA
- Developer scripts for linting, formatting, type-checking, and building

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── eslint.config.js
├── tailwind.config.mjs
└── tsconfig.json
```

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint on the project
- `npm run typecheck` — run `astro check` for type safety
- `npm run format` — format the codebase with Prettier

## Deployment

Run `npm run build` and deploy the `dist` directory to your static host of choice (Vercel, Netlify, or similar).
