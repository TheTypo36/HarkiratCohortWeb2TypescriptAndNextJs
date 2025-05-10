import { NextResponse } from "next/server";
import { emit } from "process";

export function GET() {
  return NextResponse.json({
    user: "ashish",
    email: "ashish@gmail.com",
  });
}
