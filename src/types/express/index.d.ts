import { PublicUser } from "@/types/index.ts";

declare global {
  namespace Express {
    interface User extends PublicUser {} // eslint-disable-line @typescript-eslint/no-empty-object-type
  }
}
