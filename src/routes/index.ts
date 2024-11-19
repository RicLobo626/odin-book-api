import usersRouter from "@/routes/usersRouter.js";
import authRouter from "@/routes/authRouter.js";
import postsRouter from "@/routes/postsRouter.js";
import passport from "passport";
import { Router } from "express";

const routes = Router();

routes.use("/auth", authRouter);
routes.use(passport.authenticate("jwt", { session: false }));
routes.use("/users", usersRouter);
routes.use("/posts", postsRouter);

export default routes;
