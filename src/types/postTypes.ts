import { postSchema, newPostSchema } from "@/schemas/index.js";
import { z } from "zod";

export type Post = z.infer<typeof postSchema>;
export type NewPost = z.infer<typeof newPostSchema>;
