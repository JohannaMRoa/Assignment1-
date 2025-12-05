import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { news };
