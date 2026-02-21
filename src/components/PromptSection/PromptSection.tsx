import {
  ArrowRight,
  AudioLines,
  ChevronDown,
  GitPullRequestArrow,
  Paperclip,
  PlusIcon,
} from "lucide-react";
import TextareaAutosize from "../TextareaAutosize/TextareaAutosize";
import { Button } from "../ui/button";
import PromptRandomizer from "../PromptRandomizer/PromptRandomizer";
import { useState } from "react";

const PromptSection = () => {
  const [prompt, setPrompt] = useState<string>("");

  const handlePromptSubmit = () => {
    console.log("submitted", prompt);
  };

  return (
    <div
      data-id="prompt-section"
      className="relative flex items-center justify-center mb-10 py-2.5 min-h-[65vh]"
    >
      <div
        data-id="prompt-welcome-text"
        className="relative w-full flex flex-col items-center"
      >
        <div className="text-[24px] font-semibold tracking-[.32px] sm:text-[28px] md:text-[32px] text-[#ffffff] h-[76px]">
          Create anything you imagine
        </div>

        <div
          data-id="prompt-options-container"
          className="w-full max-w-200 p-[2px] rounded-[32px] animate-border"
        >
          <div className="bg-[#1d2125] rounded-[32px] shadow-xl">
            <div className="flex flex-col overflow-hidden">
              <TextareaAutosize
                prompt={prompt}
                setPrompt={setPrompt}
                handleSubmit={handlePromptSubmit}
              />
              <div className="w-full items-center px-3 max-[460px]:my-5 my-3 flex flex-row max-[460px]:flex-col gap-y-2 max-[460px]:gap-y-3 max-[460px]:items-start bottom-3 left-3 right-3 h-20.5 sm:h-10 text-white">
                <div className="flex gap-2">
                  <Button className="w-10 h-10 px-4 py-2 rounded-full items-center bg-transparent border border-[#303438] hover:bg-[#ffffff]/10 cursor-pointer">
                    <Paperclip size={20} />
                  </Button>
                  <Button className="w-10 h-10 rounded-full items-center bg-transparent border border-[#303438] hover:bg-[#ffffff]/10 cursor-pointer">
                    <GitPullRequestArrow size={20} />
                  </Button>
                  <Button className="w-10 h-10 rounded-full items-center bg-transparent border border-[#303438] hover:bg-[#ffffff]/10 cursor-pointer">
                    <AudioLines size={20} />
                  </Button>
                  <Button className="h-10 px-4 py-2 flex flex-row gap-1.5 rounded-full items-center bg-transparent border border-[#303438] hover:bg-[#ffffff]/10 cursor-pointer">
                    <PlusIcon className="text-[#BFC2C8]" />
                    <span>Lyrics</span>
                  </Button>
                </div>
                <div className="ml-auto flex gap-2 shrink-0 max-[460px]:w-full">
                  <div className="flex rounded-full p-px rotating-border">
                    <Button className="h-10 px-4 flex items-center gap-1.5 rounded-full bg-[#1d2125] hover:bg-[#ffffff]/10">
                      <span>Tools</span>
                      <ChevronDown className="text-[#BFC2C8]" />
                    </Button>
                  </div>

                  <Button
                    className={`max-[460px]:ml-auto w-10 h-10 flex items-center justify-center rounded-full bg-[#ffffff] hover:bg-[#ffffff] border border-[#303438] transition-all duration-300 hover:scale-110 active:scale-100 ${prompt === "" ? "disabled cursor-not-allowed" : "cursor-pointer"}`}
                    onClick={prompt !== "" ? handlePromptSubmit : () => {}}
                  >
                    <ArrowRight size={24} className="text-[#212529]" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-id="prompt-info-helper" className="mt-[20px]">
          <div className="flex px-4 max-[429px]:flex-col gap-[12px] text-[#FFFFFF40] text-[12px] items-center">
            <span>MusicGPT v6 Pro - Our latest AI audio model</span>
            <span className="underline">Example prompts</span>
          </div>
        </div>

        <div className="mt-5">
          <PromptRandomizer setPrompt={setPrompt} />
        </div>
      </div>
    </div>
  );
};

export default PromptSection;
