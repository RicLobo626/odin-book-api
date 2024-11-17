import passport from "passport";
import middleware from "@/middleware/index.js";
import { Router } from "express";
import { loginSchema, newUserSchema } from "@/schemas/authSchemas.js";
import controller from "@/controllers/authController.js";

const router = Router();

router.post("/register", middleware.bodyValidator(newUserSchema), controller.register);

router.post(
  "/login",
  middleware.bodyValidator(loginSchema),
  passport.authenticate("local", { session: false }),
  controller.login
);

export default router;
