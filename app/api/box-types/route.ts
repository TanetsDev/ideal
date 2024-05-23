import ResponseService from "@/services/Response.service";
import sanityDataService from "@/services/SanityData.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const boxesRes = await sanityDataService.getBoxTypes();
    return NextResponse.json(boxesRes);
  } catch (error: any) {
    return ResponseService.error(400, error.messgae);
  }
}
