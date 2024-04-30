import sanityDataService from "@/services/SanityData.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const boxes = await sanityDataService.getBoxes(req);
    return NextResponse.json(boxes);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.error();
  }
}
