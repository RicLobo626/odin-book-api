import { CustomError } from "@/errors/CustomError.js";

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor(message = "Not found", details?: unknown) {
    super(message, details);
  }
}
