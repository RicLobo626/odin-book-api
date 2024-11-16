import {
  bodyValidator,
  errorHandler,
  requestLogger,
  unknownEndpointHandler,
} from "@/middleware/genericMiddleware.js";

export default {
  bodyValidator,
  errorHandler,
  requestLogger,
  unknownEndpointHandler,
};
