import jwt from "jsonwebtoken";
import config from "../config";

export const generateAccessToken = (userId: number) => {
  return jwt.sign({ userId }, config.jwt.jwtSecret, {
    expiresIn: config.jwt.jwtExpiration,
  });
};
