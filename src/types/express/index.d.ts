import { User as TUser } from "@/types/index.ts";

declare global {
  namespace Express {
    interface User extends TUser {} // eslint-disable-line @typescript-eslint/no-empty-object-type
  }
}
