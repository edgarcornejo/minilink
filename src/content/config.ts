import { defineCollection, z } from "astro:content";

const perfiles = defineCollection({
  schema: z.object({
    title: z.string(),
    name: z.string(),
    description: z.string(),  
    image: z.string(),
    date: z.date(),
    draft: z.boolean(),
    category: z.string(),
    offers: z.string(),
    language: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {perfiles};