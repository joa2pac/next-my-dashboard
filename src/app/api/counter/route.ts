import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    method: "GET EXECUTED",
    count: 100,
  });
}

export async function POST(request: Request) {
  return NextResponse.json({
    method: "POST EXECUTED",
    count: 100,
  });
}
