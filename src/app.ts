import express from "express";
import "express-async-errors";
import routes from "@/routes/index.js";
import middleware from "@/middleware/index.js";

const app = express();

app.use(express.json());
app.use(routes);
app.use(middleware.errorHandler);

export default app;
