import service from "@/services/authService.js";
import { NewUser, User } from "@/types/index.js";
import { Request, Response } from "express";

const register = async (req: Request<unknown, unknown, NewUser>, res: Response<User>) => {
  const body = req.body;
  const user = await service.register(body);

  res.json(user);
};

const login = async (req: Request, res: Response<{ user: User; token: string }>) => {
  const user = req.user!;
  const token = await service.signToken(user);

  res.json({ user, token });
};

export default {
  register,
  login,
};
