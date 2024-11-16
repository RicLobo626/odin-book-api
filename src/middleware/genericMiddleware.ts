import { CustomError, NotFoundError } from "@/errors/index.js";
import { Request, Response, NextFunction } from "express";
import { z, ZodError, ZodIssue, ZodRawShape } from "zod";
import morgan from "morgan";

const getRequestLogger = () => {
  morgan.token("body", (req: Request) => JSON.stringify(req.body));

  return morgan(":method :url :body :status :res[content-length] - :response-time ms");
};

export const requestLogger = getRequestLogger();

export const bodyValidator = (schema: z.ZodObject<ZodRawShape>) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    schema.parse(req.body);
    next();
  };
};

export const unknownEndpointHandler = () => {
  throw new NotFoundError("Unknown endpoint");
};

export const errorHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    const details = error.errors.map((issue: ZodIssue) => ({
      message: `${issue.path.join(".")} is ${issue.message}`,
    }));

    res.status(400).json({ error: "Invalid data", details });
  } else if (error instanceof CustomError) {
    res.status(error.statusCode).json({ error: error.message });
  } else {
    next(error);
  }
};
