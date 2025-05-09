import { NextResponse } from "next/server";
import { emit } from "process";

export function GET() {
  return NextResponse.json({
    user: "harkirat",
    email: "harkirat@gmail.com",
  });
}
