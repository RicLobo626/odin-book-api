import "dotenv/config";

const { PORT = 3000, JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  throw new Error("JWT secret is missing");
}

export { PORT, JWT_SECRET };
