import db from "@/db/index.js";
import { NewUser } from "@/types/index.js";

const findUsers = async () => {
  return await db.user.findMany();
};

const createUser = async (data: NewUser) => {
  return await db.user.create({ data });
};

export default {
  findUsers,
  createUser,
};
