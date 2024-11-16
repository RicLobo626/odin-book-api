import service from "@/services/usersService.js";
import { User, NewUser } from "@/types/index.js";
import { Request, Response } from "express";

const getUsers = async (_req: Request, res: Response<User[]>) => {
  const users = await service.findUsers();

  res.json(users);
};

const createUser = async (req: Request<unknown, unknown, NewUser>, res: Response<User>) => {
  const data = req.body;

  const user = await service.createUser(data);

  res.json(user);
};

export default {
  getUsers,
  createUser,
};
