import { CustomError } from "@/errors/CustomError.js";

export class NonUniqueEmailError extends CustomError {
  statusCode: number = 409;

  constructor(message = "Email already in use") {
    super(message, { email: "This email is already in use" });
  }
}
