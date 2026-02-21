import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";
import { presetPromptMockData } from "../mockData/presetPromptMockData";

const GET = async () => {
  const headers = {
    Accept: "application/json",
  };

  try {
    const response = await axios.get(
      `https://liveapi.musicgpt.com/prompt/front/get-prompt-presets`,
      { headers },
    );
    if (response.data.success) {
      return NextResponse.json({
        status: 200,
        presetPrompt: response.data.data,
      });
    } else {
      return NextResponse.json({
        status: 200,
        presetPrompt: presetPromptMockData,
      });
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const status = error.response.status;
      const message = error.response.data.message || "An error occurred";

      const errorMessage = `Status: ${status}, Message: ${message}`;
      throw new Error(errorMessage);
    } else {
      const genericErrorMessage = "An unknown error occurred.";
      throw new Error(genericErrorMessage);
    }
  }
};

export { GET };
