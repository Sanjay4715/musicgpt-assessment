"use client";
import ProcessingGenerationItem from "@/components/GenerationItem/ProcessingGenerationItem";
import TopupInfo from "@/components/GenerationItem/TopupInfo/TopupInfo";
import PromptSection from "@/components/PromptSection/PromptSection";
import { usePresetPromptStore } from "@/store/usePresetPromptStore";
import { useEffect } from "react";
import { useGeneratedListStore } from "@/store/useGeneratedListStore";
import GeneratedListItem from "@/components/GeneratedListItem/GeneratedListItem";
import { useLiveGenerationStore } from "@/store/useLiveGenerationStore";
import { sortArrayByCreatedAt } from "@/common";
import SkeletonGeneratedItems from "@/components/SkeletonGeneratedItems/SkeletonGeneratedItems";
import { API_STATUS } from "@/enums";

const Create = () => {
  const { getPrompts } = usePresetPromptStore();
  const { sortedGeneratedList, getGeneratedAudios, apiStatus } =
    useGeneratedListStore();
  const { latestStatusData, submitPrompt } = useLiveGenerationStore();

  useEffect(() => {
    getPrompts();
    getGeneratedAudios();
  }, [getPrompts, getGeneratedAudios]);

  return (
    <div className="w-full min-h-[90vh] px-4 md:px-6 lg:px-8 flex flex-col justify-center">
      <PromptSection submitPrompt={submitPrompt} />
      <div className="relative mx-auto w-[calc(100%-28px)] min-[960px]:w-[calc(100%-20px)] min-[960px]:max-w-185">
        <h2 className="text-[18px] font-semibold text-[#E4E6E8]">
          Recent generations
        </h2>
        <div className="flex flex-col gap-1">
          {sortArrayByCreatedAt(latestStatusData)?.map((data) => (
            <ProcessingGenerationItem key={data.id} {...data} />
          ))}
          {apiStatus === API_STATUS.SUCCESS ? (
            <>
              <TopupInfo />
              {sortedGeneratedList.map((generatedItem) => (
                <GeneratedListItem key={generatedItem.id} {...generatedItem} />
              ))}
            </>
          ) : (
            <SkeletonGeneratedItems />
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;
