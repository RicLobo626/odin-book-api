import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
});

export const newUserSchema = userSchema.omit({ id: true, createdAt: true });
