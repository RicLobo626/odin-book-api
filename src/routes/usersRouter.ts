import controller from "@/controllers/usersController.js";
import { Router } from "express";

const router = Router();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);

export default router;
