import db from "@/db/index.js";
import { NewUser } from "@/types/index.js";

const createUser = async (data: NewUser) => {
  return await db.user.create({ data });
};

export default {
  createUser,
};
