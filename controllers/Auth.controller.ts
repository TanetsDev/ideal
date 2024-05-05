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
  };

  public signUp = async (data: SignUpDTO): Promise<AuthUserDTO> => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(data.password, salt);
      const newUser = await prisma.users.create({
        data: {
          ...data,
          phone: Number(data.phone),
          password: hash,
        },
        select: this.returnedFields,
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
      const userRes = await prisma.users.findFirst({
        where: {
          phone: Number(phone),
        },
        select: { ...this.returnedFields, password: true },
      });
      if (!userRes) throw new Error("User not found");

      const isPasswordValid = await bcrypt.compare(password, userRes.password!);

      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      const user = {
        id: userRes.id,
        name: userRes.name,
        lastName: userRes.lastName,
        phone: userRes.phone,
        email: userRes.email,
        address: userRes.address,
        discount: userRes.discount,
        bonus: userRes.bonus,
      };

      return { ...user, token: generateAccessToken(user.id) };
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
        const newUser = await prisma.users.create({
          data: {
            email,
            name,
          },
          select: this.returnedFields,
        });
        return { ...newUser, token: generateAccessToken(newUser.id) };
      }
      return { ...user, token: generateAccessToken(user.id) };
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}

const authController = new AuthController();
export default authController;
