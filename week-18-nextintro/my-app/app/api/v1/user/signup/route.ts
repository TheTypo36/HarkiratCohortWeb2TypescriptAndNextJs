import { NextRequest, NextResponse } from "next/server";
import PrismaClient from "@/app/db/index";
export async function POST(req: NextRequest) {
  const client = PrismaClient;
  const { username, email, password } = await req.json();
  await client.user.create({
    data: {
      username: username,
      email: email,
      password: password,
    },
  });
  return NextResponse.json({
    message: "you have been singned up",
  });
}
