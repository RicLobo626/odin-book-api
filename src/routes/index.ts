import usersRouter from "@/routes/usersRouter.js";
import authRouter from "@/routes/authRouter.js";
import { Router } from "express";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/users", usersRouter);

export default routes;
