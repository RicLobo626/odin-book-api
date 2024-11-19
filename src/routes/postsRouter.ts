import controller from "@/controllers/postsController.js";
import middleware from "@/middleware/index.js";
import { newPostSchema } from "@/schemas/index.js";
import { Router } from "express";

const router = Router();

router.post("/", middleware.bodyValidator(newPostSchema), controller.createPost);
router.get("/", controller.getPosts);

export default router;
