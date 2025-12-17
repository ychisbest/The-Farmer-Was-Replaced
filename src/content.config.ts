// import { glob } from 'astro/loaders';
// import { defineCollection, z } from 'astro:content';

// const blog = defineCollection({
// 	// Load Markdown and MDX files in the `src/content/blog/` directory.
// 	loader: glob({ base: './blog', pattern: "**/[^_]*.{md,mdx}" }),
// 	// Type-check frontmatter using a schema
// 	schema: ({ image }) => z.object({
// 		title: z.string(),
// 		description: z.string(),
// 		// Transform string to Date object
// 		date: z.coerce.date(),
// 		updatedDate: z.coerce.date().optional(),
// 		image: image().optional(),
// 	}),
// });

// export const collections = { blog };
