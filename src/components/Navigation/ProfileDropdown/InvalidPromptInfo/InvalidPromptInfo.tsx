import InvalidPromptEmoji from "@/assets/temp.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const InvalidPromptInfo = () => {
  return (
    <div className="flex flex-row items-start gap-3 p-2 rounded-[12px] bg-transparent">
      <div className="shrink-0 bg-[#D89C3A] w-15 h-15 rounded-[16px] flex items-center justify-center relative">
        😢
      </div>
      <div className="flex flex-col gap-2 text-white text-[14px]">
        <span className="font-semibold">Invalid prompt</span>
        <span className="font-normal text-transparent bg-clip-text bg-linear-to-r from-[#5D616571] via-[#5D616571] to-[rgba(128,129,130,0)]">
          This is not good prompt, throw invalid prompt
        </span>
        <span className="font-medium text-[#E4E6E8]">
          Your prompt does not seem to be valid. Please provide a prompt related
          to song creation, remixing, covers, or similar music tasks.
        </span>
        <div className="flex flex-row gap-1 pt-1 ">
          <Button className="bg-transparent border text-[14px] text-[#5D6165] hover:text-white font-medium px-3 py-0.75 rounded-[10px] border-[#5D6165] hover:bg-[#5D6165] cursor-pointer">
            Retry
          </Button>
          <Button className="bg-transparent border text-[14px] text-[#5D6165] hover:text-white font-medium px-3 py-0.75 rounded-[10px] border-[#5D6165] hover:bg-[#5D6165] cursor-pointer">
            Copy Prompt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvalidPromptInfo;
