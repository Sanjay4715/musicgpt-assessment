import { ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const CreditInfo = () => {
  return (
    <Button className="rounded-[12px] h-12.5 max-[960px]:h-17.25 p-4 max-[960px]:px-5 w-full flex flex-row justify-between text-[#777A80] max-[960px]:bg-[#ffffff0d]">
      <span className="flex flex-row items-center gap-1.25">
        <span className="text-[#FFFFFF]">120/500 credits</span>
        <Info size={18} />
      </span>
      <span className="ml-auto flex items-center gap-2 px-3 py-2 rounded-full bg-[#ffffff0d] hover:bg-[#ffffff1a] cursor-pointer">
        <span className="">Top Up</span>
        <ChevronRight size={16} />
      </span>
    </Button>
  );
};

export default CreditInfo;
