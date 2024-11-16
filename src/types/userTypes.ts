import { newUserSchema, userSchema } from "@/schemas/userSchema.js";
import { z } from "zod";

export type User = z.infer<typeof userSchema>;
export type NewUser = z.infer<typeof newUserSchema>;
