import { CustomError } from "@/errors/CustomError.js";

export class ValidationError extends CustomError {
  statusCode: number = 400;

  constructor(message = "Invalid data", details?: unknown) {
    super(message, details);
  }
}
