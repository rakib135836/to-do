
import { NextResponse } from "next/server";
import BookInfo from "../../../../../libs/models/bookingInfo";
import { main } from "../../../../../libs/config/mongodb";

export async function POST(request) {
  const data = await request.json();
  main();
  await BookInfo.create(data);
  return NextResponse.json({ message: "ok " });
}


