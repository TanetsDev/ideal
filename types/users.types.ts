import { Users } from "@prisma/client";

export type SignInDTO = {
  phone: number | bigint;
  password: string;
};

export interface SignUpDTO extends SignInDTO {
  name: string;
  lastName: string;
  email: string;
  address?: string;
  password: string;
}

export interface AuthUserDTO extends Users {
  token: string;
}
