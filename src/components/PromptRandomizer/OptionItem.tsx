import Image from "next/image";
import { Button } from "../ui/button";
import { PromptOptionItemProps } from "@/interface/PromptRandomizer";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "../ui/popover";
import { RotateCw, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { randomizeArray } from "@/common";

const OptionItem = ({
  option,
  handleOptionPromts,
  setPrompt,
}: PromptOptionItemProps) => {
  const [presetPrompts, setPresetPrompts] = useState<string[]>([]);
  const [randomizedPrompts, setRandomizedPrompts] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handlePromptClick = (label: string) => {
    const prompts = handleOptionPromts(label);
    const newPresetPrompts: string[] = prompts.flatMap((item) =>
      item.prompts.map((e) => e.prompt),
    );
    setPresetPrompts(newPresetPrompts);
    const uniquePrompts = Array.from(
      new Set(randomizeArray(newPresetPrompts).slice(0, 3)),
    );
    setRandomizedPrompts(uniquePrompts);
  };

  const randomizePrompt = () => {
    const uniquePrompts = Array.from(
      new Set(randomizeArray(presetPrompts).slice(0, 3)),
    );
    setRandomizedPrompts(uniquePrompts);
  };

  return (
    <>
      <Popover open={open} onOpenChange={(val) => setOpen(val)}>
        <PopoverTrigger asChild>
          <Button
            onClick={() => handlePromptClick(option.label)}
            className="flex items-center rounded-[25px] px-3 h-11 gap-[5px] border border-[#262626] bg-transparent hover:bg-[#1d2125] cursor-pointer"
          >
            <Image
              src={option.icon}
              alt={option.label}
              width={20}
              height={20}
            />
            <span className="text-[14px]">{option.label}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align={option.align}
          className="w-[750px] p-4 rounded-[28px] border border-[#262626] bg-[#1a1a1a] backdrop-blur-[50px] text-[#777A80]"
        >
          <PopoverHeader>
            <PopoverTitle className="p-3 flex items-center text-[#666A70]">
              <div className="text-[14px] leading-1.6 font-bold">
                {option.label}
              </div>
              <div className="flex ml-auto gap-3 items-center">
                <RotateCw
                  size={18}
                  className="hover:text-white cursor-pointer"
                  onClick={randomizePrompt}
                />
                <X
                  size={20}
                  className="hover:text-white cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
            </PopoverTitle>
            <PopoverDescription className="w-full flex flex-col text-[#bfc2c8] text-[16px]">
              <AnimatePresence>
                {randomizedPrompts.map((prompt) => (
                  <span
                    key={prompt}
                    className="px-3 h-[50px] w-full flex items-center cursor-pointer hover:bg-[#262a2e] rounded-[12px] overflow-hidden"
                    onClick={() => {
                      setPrompt(prompt);
                      setOpen(false);
                    }}
                  >
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="truncate w-full text-left transition"
                    >
                      {prompt}
                    </motion.span>
                  </span>
                ))}
              </AnimatePresence>
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default OptionItem;
