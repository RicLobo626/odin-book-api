import express from "express";
import "express-async-errors";
import passport from "passport";
import routes from "@/routes/index.js";
import middleware from "@/middleware/index.js";
import "./strategies/index.js";

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(middleware.requestLogger);
app.use(routes);
app.use(middleware.unknownEndpointHandler);
app.use(middleware.errorIdentifier);
app.use(middleware.errorHandler);

export default app;
