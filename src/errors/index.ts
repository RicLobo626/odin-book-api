export class CustomError extends Error {
  statusCode = 500;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor(message = "Not found") {
    super(message);
  }
}
