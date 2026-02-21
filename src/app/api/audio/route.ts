import { NextResponse } from "next/server";

const GET = async () => {
  return NextResponse.json({ message: "Success get" });
};

export { GET };
