import controller from "@/controllers/usersController.js";
import middleware from "@/middleware/index.js";
import { newUserSchema } from "@/schemas/userSchema.js";
import { Router } from "express";

const router = Router();

router.get("/", controller.getUsers);
router.post("/", middleware.bodyValidator(newUserSchema), controller.createUser);

export default router;
