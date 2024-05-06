import { NextRequest } from "next/server";
import userController from "@/controllers/User.controller";
import ResponseService from "@/services/Response.servise";
import tokenCheck from "@/middlewares/tokenCheck";

export async function GET(req: NextRequest) {
  try {
    const userId = await tokenCheck(req);

    return await userController.getUser(userId);
  } catch (error: any) {
    return ResponseService.error(400, error.message);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const userId = await tokenCheck(req);
    const user = await userController.updateUser(await req.json(), userId);
    return ResponseService.success(user);
  } catch (error: any) {
    return ResponseService.error(400, error.message);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const userId = await tokenCheck(req);
    const user = await userController.deleteUser(userId);
    return ResponseService.success(user);
  } catch (error: any) {
    return ResponseService.error(400, error.message);
  }
}
