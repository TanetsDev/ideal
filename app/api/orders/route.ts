import ordersController from "@/controllers/Order.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const order = await ordersController.createOrder(body);
  return order;
}

export async function GET(req: NextRequest) {
  try {
    return ordersController.getOrdersHistory(req);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.error();
  }
}
