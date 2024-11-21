import service from "@/services/authService.js";
import usersService from "@/services/usersService.js";
import { NewUser, PublicUser } from "@/types/index.js";
import { Request, Response } from "express";

const register = async (req: Request<unknown, unknown, NewUser>, res: Response<PublicUser>) => {
  const { password, ...otherFields } = req.body;
  const hashedPassword = await service.hashPassword(password);

  const user = await usersService.createUser({ ...otherFields, password: hashedPassword });

  res.json(user);
};

const login = async (req: Request, res: Response<{ user: PublicUser; token: string }>) => {
  const user = req.user!;
  const token = await service.signToken(user);

  res.json({ user, token });
};

export default {
  register,
  login,
};
