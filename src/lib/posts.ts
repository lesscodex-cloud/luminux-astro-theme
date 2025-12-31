import { getCollection, type CollectionEntry } from "astro:content";

const PAGE_SIZE = 5;

const postFilter = ({ data }: CollectionEntry<"blog">) =>
  import.meta.env.PROD ? data.draft === false : true;

export async function getSortedPosts() {
  const posts = await getCollection("blog", postFilter);

  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function paginatePosts(posts: CollectionEntry<"blog">[], pageNumber: number) {
  const start = (pageNumber - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return posts.slice(start, end);
}

export function getTotalPages(posts: CollectionEntry<"blog">[]) {
  return Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
}
