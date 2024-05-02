import sanityDataService from "@/services/SanityData.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const gallery = await sanityDataService.getInstaGallery();
    return NextResponse.json(gallery);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.error();
  }
}
