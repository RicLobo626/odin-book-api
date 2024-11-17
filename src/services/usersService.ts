import db from "@/db/index.js";
import { NotFoundError } from "@/errors/index.js";
import { User } from "@/types/index.js";

const findUsers = () => db.user.findMany();

const findUserById = async (id: User["id"]) => {
  const user = await db.user.findUnique({ where: { id } });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return user;
};

export default {
  findUsers,
  findUserById,
};
