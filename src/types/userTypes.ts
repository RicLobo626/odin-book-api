import { newUserSchema, userSchema, publicUserSchema } from "@/schemas/index.js";
import { z } from "zod";

export type User = z.infer<typeof userSchema>;
export type PublicUser = z.infer<typeof publicUserSchema>;
export type NewUser = z.infer<typeof newUserSchema>;
