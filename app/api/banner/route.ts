import sanityDataService from "@/services/SanityData.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const banner = await sanityDataService.getBanner();
    return NextResponse.json(banner);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.error();
  }
}
