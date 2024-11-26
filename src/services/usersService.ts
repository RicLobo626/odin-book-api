import db from "@/db/index.js";
import { NotFoundError } from "@/errors/index.js";
import { NewUser, User } from "@/types/index.js";

const findUsers = () => db.user.findMany({ include: { posts: true } });

const findUserById = async (id: User["id"]) => {
  const user = await db.user.findUnique({ where: { id }, include: { posts: true } });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return user;
};

const createUser = (data: NewUser) => db.user.create({ data, include: { posts: true } });

export default {
  findUsers,
  findUserById,
  createUser,
};
