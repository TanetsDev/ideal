import authController from "@/controllers/Auth.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("IN route", body);
    const userRes = await authController.signUp(body);
    const {
      id,
      name,
      lastName,
      phone,
      email,
      address,
      discount,
      bonus,
      token,
    } = userRes;
    const user = {
      id,
      name,
      lastName,
      phone: Number(phone),
      email,
      address,
      discount,
      bonus,
      token,
    };
    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.error();
  }
}
