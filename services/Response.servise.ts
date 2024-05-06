import { NextResponse } from "next/server";

class ResponseService {
  static success(data: any, code?: number) {
    return NextResponse.json(data, { status: code || 200 });
  }

  static error(errorCode: number, errorMsg: string) {
    return NextResponse.json({ error: errorMsg }, { status: errorCode || 400 });
  }
}

export default ResponseService;
