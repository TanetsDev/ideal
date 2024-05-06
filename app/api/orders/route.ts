import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("IN route", body);
    const user = "await authController.signUp(body)";

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.error();
  }
}
