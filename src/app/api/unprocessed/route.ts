import { NextResponse } from "next/server";
import { unprocessedGenerationMockData } from "../mockData/unprocessedGenerationMockData";

const GET = async () => {
  return NextResponse.json({
    status: 200,
    rows: unprocessedGenerationMockData,
  });
};

export { GET };
