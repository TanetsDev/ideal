import { Prisma, Users } from "@prisma/client";
import prisma from "@/config/prisma";

class UserController {
  constructor() {}

  public getUserByPhone = async (phone: number | bigint) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          phone,
        },
      });
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public updateUser = async (
    data: Prisma.UsersUpdateInput,
    userId: number
  ): Promise<Users> => {
    try {
      const updatedUser = await prisma.users.update({
        where: {
          id: userId,
        },
        data,
      });
      return updatedUser;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public deleteUser = async (userId: number) => {
    try {
      const deletedUser = await prisma.users.delete({
        where: {
          id: userId,
        },
      });
      return deletedUser;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

const controller = new UserController();
export default controller;
