import db from "@/db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NonUniqueEmailError, NotFoundError, ValidationError } from "@/errors/index.js";
import { NewUser, User } from "@/types/index.js";
import { JWT_SECRET } from "@/utils/config.js";

const verifyLogin = async (email: string, password: string) => {
  const user = await db.user.findUnique({
    where: { email },
    omit: { password: false },
  });

  if (!user) {
    throw new NotFoundError("Invalid email");
  }

  const { password: passwordHash, ...nonSensitiveUser } = user;

  const isValidPassword = await bcrypt.compare(password, passwordHash);

  if (!isValidPassword) {
    throw new ValidationError("Invalid password");
  }

  return nonSensitiveUser;
};

const signToken = async ({ id, firstName, lastName }: User) => {
  const fullName = `${firstName} ${lastName}`;
  const tokenPayload = { id, fullName };

  return jwt.sign(tokenPayload, JWT_SECRET!);
};

const hashPassword = (password: NewUser["password"]) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const checkEmailAvailability = async (email: string) => {
  const user = await db.user.findUnique({ where: { email } });

  if (user) {
    throw new NonUniqueEmailError();
  }

  return true;
};

export default {
  hashPassword,
  verifyLogin,
  signToken,
  checkEmailAvailability,
};
