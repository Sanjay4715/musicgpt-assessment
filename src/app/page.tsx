"use client";

import PromptSection from "@/components/PromptSection/PromptSection";
import { useCommonStore } from "@/store/useCommonStore";
import { useLiveGenerationStore } from "@/store/useLiveGenerationStore";
import { usePresetPromptStore } from "@/store/usePresetPromptStore";
import { useEffect } from "react";

const Home = () => {
  const { getPrompts } = usePresetPromptStore();
  const { submitPrompt, getStatus } = useLiveGenerationStore();
  const { setStoreState } = useCommonStore();

  useEffect(() => {
    getPrompts();
  }, [getPrompts]);

  useEffect(() => {
    getStatus();
  }, []);

  const handleSubmitPrompt = (prompt: string) => {
    submitPrompt(prompt);
    setStoreState({ isProfileDropdown: true });
  };

  return (
    <div className="w-full min-h-[90vh] px-4 md:px-6 lg:px-8 flex flex-col justify-center">
      <PromptSection submitPrompt={handleSubmitPrompt} />
    </div>
  );
};

export default Home;
