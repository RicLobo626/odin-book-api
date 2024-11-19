import { z } from "zod";

const password = z.string().min(5).max(50);

export const userSchema = z.object({
  id: z.number(),
  fullName: z.string().min(1),
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const newUserSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password,
});

export const loginSchema = z.object({
  email: z.string().email(),
  password,
});
