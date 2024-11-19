import { z } from "zod";

export const postSchema = z.object({
  id: z.number(),
  content: z.string(),
  likes: z.number().min(0).default(0),
  authorId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const newPostSchema = postSchema.pick({ content: true }).extend({ likes: z.literal(0).default(0) });
