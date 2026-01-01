import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL("/sitemap.xml", site ?? "https://example.com");
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl.toString()}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
