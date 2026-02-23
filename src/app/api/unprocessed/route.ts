import { NextResponse } from "next/server";
import { unprocessedGenerationMockData } from "../mockData/unprocessedGenerationMockData";
import { delay } from "@/common";

const GET = async () => {
  const delayMs = Number(process.env.API_DELAY_MS ?? 0);

  if (delayMs > 0) {
    await delay(delayMs);
  }
  return NextResponse.json({
    status: 200,
    rows: unprocessedGenerationMockData,
  });
};

export { GET };
