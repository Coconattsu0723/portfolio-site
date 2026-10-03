import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const optionalModule = z.enum([
  "productUI",
  "informationArchitecture",
  "performance",
  "accessibility",
  "challenges",
  "branding",
  "copy",
  "interaction",
  "responsive",
]);

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string(),
    category: z.string(),
    type: z.string(),
    description: z.string(),
    year: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean(),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    optionalModules: z.array(optionalModule).default([]),
  }),
});

export const collections = { works };
