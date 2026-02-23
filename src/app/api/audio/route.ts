import { NextResponse } from "next/server";
import { generatedAudioMockData } from "../mockData/generatedAudioMockData";
import { delay } from "@/common";

const GET = async () => {
  const delayMs = Number(process.env.API_DELAY_MS ?? 0);

  if (delayMs > 0) {
    await delay(delayMs);
  }

  return NextResponse.json({
    status: 200,
    audios: generatedAudioMockData,
  });
};

export { GET };
