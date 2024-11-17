import service from "@/services/usersService.js";
import { User } from "@/types/index.js";
import { Request, Response } from "express";

const getUsers = async (_req: Request, res: Response<User[]>) => {
  const users = await service.findUsers();

  res.json(users);
};

const getUser = async (req: Request<{ id: string }>, res: Response<User>) => {
  const id = +req.params.id;
  const user = await service.findUserById(id);

  res.json(user);
};

export default {
  getUsers,
  getUser,
};
