"use client";

import PromptSection from "@/components/PromptSection/PromptSection";
import { Button } from "@/components/ui/button";
import { useLiveGenerationStore } from "@/store/useLiveGenerationStore";
import { usePresetPromptStore } from "@/store/usePresetPromptStore";
import { useEffect } from "react";

const Home = () => {
  const { getPrompts } = usePresetPromptStore();
  const { latestStatusData, submitPrompt, getStatus } =
    useLiveGenerationStore();

  useEffect(() => {
    getPrompts();
  }, [getPrompts]);

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div className="w-full min-h-[90vh] px-4 md:px-6 lg:px-8 flex flex-col justify-center">
      <PromptSection submitPrompt={submitPrompt} />
    </div>
  );
};

export default Home;
