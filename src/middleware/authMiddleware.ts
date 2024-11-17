import { NewUser } from "@/types/index.js";
import { NextFunction, Request, Response } from "express";
import service from "@/services/authService.js";

export const emailChecker = async (
  req: Request<unknown, unknown, NewUser>,
  _res: Response,
  next: NextFunction
) => {
  await service.checkEmailAvailability(req.body.email);

  next();
};
