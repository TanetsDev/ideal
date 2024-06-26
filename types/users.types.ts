import { Users } from "@prisma/client";

export type SignInDTO = {
  phone: string;
  password: string;
};

export interface SignUpDTO extends SignInDTO {
  name: string;
  lastName: string;
  email: string;
  address?: string;
}

export interface AuthUserDTO {
  user: Omit<Users, "createdAt" | "updatedAt" | "password">;
  token: string;
}

export type OAuthDTO = {
  email: string;
  name?: string;
};
