import rss from "@astrojs/rss";
import { getSortedPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getSortedPosts();

  return rss({
    title: "Luminux Blog",
    description: "Updates, tutorials, and release notes from the Luminux team.",
    site: context.site ?? "https://luminux.example.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}`,
    })),
  });
}
