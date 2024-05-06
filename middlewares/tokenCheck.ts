import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

import ResponseService from "../services/Response.servise";
import config from "../config";

const tokenCheck = async (req: NextRequest) => {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) {
      return ResponseService.error(401, "Token is missing");
    }
    const { userId } = jwt.verify(token, config.jwt.jwtSecret) as JwtPayload;

    return userId;
  } catch (error: any) {
    return ResponseService.error(401, error.message);
  }
};

export default tokenCheck;
