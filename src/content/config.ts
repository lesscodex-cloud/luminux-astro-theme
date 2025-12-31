import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  }),
});

export const collections = { blog };
