import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
});

const password = z.string().min(5).max(50);

export const loginSchema = userSchema.pick({ email: true }).extend({ password });

export const newUserSchema = userSchema.omit({ id: true, createdAt: true }).extend({ password });
