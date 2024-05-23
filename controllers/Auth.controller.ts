import prisma from "@/config/prisma";
import {
  AuthUserDTO,
  SignInDTO,
  SignUpDTO,
  OAuthDTO,
} from "@/types/users.types";
import bcrypt from "bcrypt";
import { generateAccessToken } from "@/utils/accessTokens";

class AuthController {
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
    isWelcomeDiscountAvalible: true,
  };

  public signUp = async (data: SignUpDTO): Promise<AuthUserDTO> => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(data.password, salt);
      const newUser = await prisma.users.create({
        data: {
          ...data,
          password: hash,
        },
        select: this.returnedFields,
      });

      return { user: newUser, token: generateAccessToken(newUser.id) };
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
        select: { ...this.returnedFields, password: true },
      });
      if (!user) throw new Error("User not found");

      const isPasswordValid = await bcrypt.compare(password, user.password!);

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }

      return { user, token: generateAccessToken(user.id) };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public signInOAuth = async ({
    email,
    name,
  }: OAuthDTO): Promise<AuthUserDTO> => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          email,
        },
        select: this.returnedFields,
      });
      if (!user) {
        const fullName = name?.split(" ")!;
        const newUser = await prisma.users.create({
          data: {
            email,
            name: fullName[0],
            lastName: fullName[1],
          },
          select: this.returnedFields,
        });
        return { user: newUser, token: generateAccessToken(newUser.id) };
      }
      return { user, token: generateAccessToken(user.id) };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

const authController = new AuthController();
export default authController;
