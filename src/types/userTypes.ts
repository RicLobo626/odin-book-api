import { newUserSchema, userSchema } from "@/schemas/index.js";
import { z } from "zod";

export type NewUser = z.infer<typeof newUserSchema>;
export type User = z.infer<typeof userSchema>;
