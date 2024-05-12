import { Prisma } from "@prisma/client";
import prisma from "@/config/prisma";
import ResponseService from "@/services/Response.service";

class UserController {
  constructor() {}
  private returnedFields = {
    id: true,
    name: true,
    lastName: true,
    phone: true,
    email: true,
    address: true,
    discount: true,
    bonus: true,
  };

  public getUser = async (id: number) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          id,
        },
        select: this.returnedFields,
      });

      if (!user) {
        return ResponseService.error(404, "User not found");
      }

      return ResponseService.success(user);
    } catch (error: any) {
      return ResponseService.error(400, error.message);
    }
  };

  public updateUser = async (data: Prisma.UsersUpdateInput, userId: number) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          id: userId,
        },
        select: {
          id: true,
        },
      });
      if (!user) {
        return ResponseService.error(404, "User not found");
      }

      const updatedUser = await prisma.users.update({
        where: {
          id: userId,
        },
        data,
      });
      return ResponseService.success(updatedUser);
    } catch (error: any) {
      return ResponseService.error(500, error.message);
    }
  };

  public deleteUser = async (userId: number) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          id: userId,
        },
        select: this.returnedFields,
      });

      if (!user) {
        return ResponseService.error(404, "User not found");
      }

      const deletedUser = await prisma.users.delete({
        where: {
          id: userId,
        },
      });
      return ResponseService.success(deletedUser);
    } catch (error: any) {
      return ResponseService.error(500, error.message);
    }
  };
}

const userController = new UserController();
export default userController;
