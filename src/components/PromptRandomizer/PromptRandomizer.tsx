import { CategorizedPrompt, PromptState } from "@/interface/PresetPrompts";
import { usePresetPromptStore } from "@/store/usePresetPromptStore";
import { useCallback, useEffect, useState } from "react";
import { promptRandomOptions } from "@/constants/constants";
import OptionItem from "./OptionItem";
import { randomizeArray } from "@/common";
import { PromptRamdomizerProps } from "@/interface/PromptRandomizer";

const PromptRandomizer = ({ setPrompt }: PromptRamdomizerProps) => {
  const { prompts } = usePresetPromptStore();
  const [categorizedPrompts, setCategorizedPrompts] = useState<
    CategorizedPrompt[]
  >([]);

  const categorizePrompts = useCallback(() => {
    const activePrompts = prompts.filter((p) => p.status === "ACTIVE");

    const categorizedPromptObj: Record<string, PromptState[]> = {};
    activePrompts.forEach((item) => {
      if (!item.tags) return;
      item.tags.split(",").forEach((tag) => {
        const cleanTag = tag.trim();
        if (!categorizedPromptObj[cleanTag])
          categorizedPromptObj[cleanTag] = [];
        categorizedPromptObj[cleanTag].push(item);
      });
    });

    const categorized: CategorizedPrompt[] = Object.entries(
      categorizedPromptObj,
    ).map(([tag, prompts]) => ({ tag, prompts }));

    setCategorizedPrompts(categorized);
  }, [prompts]);

  useEffect(() => {
    const id = setTimeout(() => categorizePrompts(), 0);
    return () => clearTimeout(id);
  }, [categorizePrompts]);

  const handleOptionPromts = useCallback(
    (label: string) => {
      const labelWords = label
        .split(/[\s,]+/)
        .map((word) => word.toLowerCase());
      const filteredArr = categorizedPrompts.filter((item) => {
        const tagWords = item.tag
          .split(/[_ ,]+/)
          .map((word) => word.toLowerCase());

        return labelWords.some((word) => tagWords.includes(word));
      });

      if (label === "Random" && filteredArr.length === 0) {
        return randomizeArray(categorizedPrompts);
      }

      return filteredArr;
    },
    [categorizedPrompts],
  );

  return (
    <div className="grid grid-cols-5 max-[700px]:grid-cols-4 max-[590px]:grid-cols-3 max-[413px]:grid-cols-2 items-center gap-2.75 max-[730px]:gap-2 max-[590px]:gap-1">
      {promptRandomOptions.map((item, index) => (
        <OptionItem
          key={index}
          option={item}
          handleOptionPromts={handleOptionPromts}
          setPrompt={setPrompt}
        />
      ))}
    </div>
  );
};

export default PromptRandomizer;
