import { CustomError, NotFoundError, ValidationError } from "@/errors/index.js";
import { Request, Response, NextFunction } from "express";
import { ZodError, ZodIssue, ZodRawShape, ZodObject } from "zod";
import morgan from "morgan";
import logger from "@/utils/logger.js";

const getRequestLogger = () => {
  morgan.token("body", (req: Request) => JSON.stringify(req.body));

  return morgan(":method :url :body :status :res[content-length] - :response-time ms");
};

export const requestLogger = getRequestLogger();

export const bodyValidator = (schema: ZodObject<ZodRawShape>) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    schema.parse(req.body);
    next();
  };
};

export const unknownEndpointHandler = () => {
  throw new NotFoundError("Unknown endpoint");
};

export const errorIdentifier = (error: Error, _req: Request, _res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    const details: { [key: string]: string } = {};

    error.errors.forEach((issue: ZodIssue) => {
      const field = issue.path.join(".");

      details[field] = issue.message;
    });

    throw new ValidationError("Invalid data", details);
  }

  next(error);
};

export const errorHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  logger.error(error);

  if (error instanceof CustomError) {
    res.status(error.statusCode).json({ error: error.message, details: error.details });
    return;
  }

  next(error);
};
