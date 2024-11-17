export class CustomError extends Error {
  statusCode: number = 500;
  details?: unknown;

  constructor(message: string, details?: unknown) {
    super(message);
    this.name = this.constructor.name;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor(message = "Not found", details?: unknown) {
    super(message, details);
  }
}

export class ValidationError extends CustomError {
  statusCode: number = 400;

  constructor(message = "Invalid data", details?: unknown) {
    super(message, details);
  }
}
