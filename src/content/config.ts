import { defineCollection, z } from "astro:content";

const sectionSchema = z.object({
  title: z.string().optional(),
  body: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  imageCaption: z.string().optional(),
  /** "image-right" | "image-left" | "image-top" | "text-only" | "image-only" */
  layout: z.string().optional(),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    image: z.string().optional(),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    lang: z.enum(["en", "es"]),
    sections: z.array(sectionSchema).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
