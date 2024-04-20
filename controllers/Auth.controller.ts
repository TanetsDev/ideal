import prisma from "@/config/prisma";
import { AuthUserDTO, SignInDTO, SignUpDTO } from "@/types/users.types";
import bcrypt from "bcrypt";
import { generateAccessToken } from "@/utils/accessTokens";

class AuthController {
  constructor() {}

  public signUp = async (data: SignUpDTO): Promise<AuthUserDTO> => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(data.password, salt);
      const newUser = await prisma.users.create({
        data: {
          ...data,
          password: hash,
        },
      });

      return { ...newUser, token: generateAccessToken(newUser.id) };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public signIn = async ({
    password,
    phone,
  }: SignInDTO): Promise<AuthUserDTO> => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          phone,
        },
      });
      if (!user) throw new Error("User not found");

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      return { ...user, token: generateAccessToken(user.id) };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

const controller = new AuthController();
export default controller;
