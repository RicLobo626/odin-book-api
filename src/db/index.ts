import { PrismaClient } from "@prisma/client";

export default new PrismaClient({
  omit: {
    user: {
      password: true,
      firstName: true,
      lastName: true,
      email: true,
    },
  },
}).$extends({
  result: {
    user: {
      fullName: {
        needs: { firstName: true, lastName: true },
        compute(user) {
          return `${user.firstName} ${user.lastName}`;
        },
      },
    },
  },
});
