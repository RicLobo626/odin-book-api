import usersRouter from "@/routes/usersRouter.js";
import { Router } from "express";

const routes = Router();

routes.use("/users", usersRouter);

export default routes;
