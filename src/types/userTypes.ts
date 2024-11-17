import { newUserSchema, userSchema } from "@/schemas/authSchemas.js";
import { z } from "zod";

export type User = z.infer<typeof userSchema>;
export type NewUser = z.infer<typeof newUserSchema>;
