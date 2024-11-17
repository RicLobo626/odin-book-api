import { emailChecker } from "@/middleware/authMiddleware.js";
import {
  bodyValidator,
  errorHandler,
  requestLogger,
  unknownEndpointHandler,
  errorIdentifier,
} from "@/middleware/genericMiddleware.js";

export default {
  bodyValidator,
  errorHandler,
  requestLogger,
  unknownEndpointHandler,
  errorIdentifier,
  emailChecker,
};
