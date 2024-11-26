import { postSchema } from "@/schemas/postSchemas.js";
import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  fullName: z.string().min(1),
  email: z.string().email(),
  createdAt: z.date(),
  posts: z.array(postSchema),
});

export const newUserSchema = userSchema
  .pick({
    email: true,
  })
  .extend({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    password: z.string().min(5).max(50),
  });

export const loginSchema = newUserSchema.pick({ email: true, password: true });

export const publicUserSchema = userSchema.omit({ email: true });
