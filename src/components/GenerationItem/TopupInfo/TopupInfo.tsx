import CloseIcon from "@/assets/CloseIcon.svg";
import { Button } from "@/components/ui/button";
import { TriangleAlert, X } from "lucide-react";
import Image from "next/image";

const TopupInfo = () => {
  return (
    <div
      data-id="credits"
      className="group relative flex flex-row rounded-[12px] p-4 bg-[#D89C3A14] items-center"
    >
      <div className="hidden group-hover:absolute group-hover:flex cursor-pointer -top-2 -right-2 w-5 h-5 rounded-full border border-[#303438] bg-[#16191C] text-[#505458]  items-center justify-center">
        <Image src={CloseIcon} alt="close" width={8} height={8} />
      </div>
      <div className="flex flex-col text-[14px] gap-1">
        <span className="flex flex-row gap-1.5 text-[#D89C3A] items-center">
          <TriangleAlert size={20} />
          <span>Insufficient credits</span>
        </span>
        <span className="text-[#BFC2C8]">Your credit balance: 0</span>
      </div>
      <Button className="cursor-pointer ml-auto py-0.75 px-3 rounded-[10px] bg-transparent border border-[#5D6165] text-[14px] leading-6.5 font-medium hover:text-[#777A80]">
        Top Up
      </Button>
    </div>
  );
};

export default TopupInfo;
