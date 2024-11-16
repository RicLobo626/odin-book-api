import { Request, Response, NextFunction } from "express";
import { z, ZodError, ZodIssue, ZodRawShape } from "zod";

export const bodyValidator = (schema: z.ZodObject<ZodRawShape>) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    schema.parse(req.body);
    next();
  };
};

export const errorHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    const details = error.errors.map((issue: ZodIssue) => ({
      message: `${issue.path.join(".")} is ${issue.message}`,
    }));

    res.status(400).json({ error: "Invalid data", details });
  } else {
    next(error);
  }
};
