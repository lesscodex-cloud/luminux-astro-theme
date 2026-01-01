import type { APIRoute } from "astro";
import { getSortedPosts } from "../lib/posts";

const staticRoutes = ["/", "/pricing/", "/blog/", "/styleguide/", "/terms/", "/privacy/"];

export const GET: APIRoute = async ({ site }) => {
  const posts = await getSortedPosts();
  const baseUrl = site ?? new URL("https://example.com");

  const urls = [
    ...staticRoutes.map((path) => ({ path, lastmod: new Date() })),
    ...posts.map((post) => ({
      path: `/blog/${post.slug}/`,
      lastmod: post.data.updatedDate ?? post.data.pubDate,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        ({ path, lastmod }) =>
          `  <url>\n    <loc>${new URL(path, baseUrl).toString()}</loc>\n    <lastmod>${lastmod.toISOString()}</lastmod>\n  </url>`
      )
      .join("\n") +
    "\n</urlset>";

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
