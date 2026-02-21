"use client";
import { Button } from "@/components/ui/button";
import { GeneratedList } from "@/interface/GeneratedItems";
import { CircleCheck } from "lucide-react";
import { toast } from "sonner";

const InvalidPromptInfo = ({ ...genaratedItemProps }: GeneratedList) => {
  const { error_message, prompt, error_message_detail } = genaratedItemProps;

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.custom((t) => (
        <div className="bg-[#ffffff] px-4 py-3 flex items-center gap-2 rounded-[12px] text-[16px] font-semibold">
          <CircleCheck size={20} className="text-black" />
          <span>Failed Prompt copied</span>
        </div>
      ));
    } catch (err) {
      toast.error("Copy failed");
    }
  };

  return (
    <div className="flex flex-row items-start gap-3 p-2 rounded-[12px] bg-transparent">
      <div className="shrink-0 bg-[#D89C3A] w-15 h-15 rounded-[16px] flex items-center justify-center relative text-[32px]">
        🥲
      </div>
      <div className="flex flex-col gap-2 text-white text-[16px]">
        <span className="font-semibold">{error_message}</span>
        <span className="text-[#e4e6e8]">{error_message_detail}</span>
        <span className="font-medium text-[#505458]">{prompt}</span>
        <div className="flex flex-row gap-1 pt-1 ">
          <Button className="bg-transparent border text-[14px] text-[#5D6165] hover:text-white font-medium px-3 py-0.75 rounded-[10px] border-[#5D6165] hover:bg-[#5D6165] cursor-pointer">
            Retry
          </Button>
          <Button
            disabled={!prompt}
            onClick={() => prompt && handleCopy(prompt)}
            className="bg-transparent border text-[14px] text-[#5D6165] hover:text-white font-medium px-3 py-0.75 rounded-[10px] border-[#5D6165] hover:bg-[#5D6165] cursor-pointer"
          >
            Copy Prompt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvalidPromptInfo;
