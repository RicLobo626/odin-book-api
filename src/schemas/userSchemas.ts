import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  createdAt: z.date(),
  password: z.string().min(60), // hashed password
});

const password = z.string().min(5).max(50);

export const newUserSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password,
});

export const loginSchema = newUserSchema.pick({ email: true, password: true });

export const publicUserSchema = userSchema
  .omit({ firstName: true, lastName: true, password: true, email: true })
  .extend({
    fullName: z.string().min(2),
  });
