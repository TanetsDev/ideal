import ResponseService from "@/services/Response.service";
import sanityDataService from "@/services/SanityData.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const boxesRes = await sanityDataService.getBoxes(req);
    // console.log("FULL BOXES INFO", boxesRes);
    return NextResponse.json(boxesRes.boxes);
  } catch (error: any) {
    return ResponseService.error(400, error.messgae);
  }
}
