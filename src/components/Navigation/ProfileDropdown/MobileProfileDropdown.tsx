import { ChevronLeft, TriangleAlert } from "lucide-react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import CreditInfo from "./CreditInfo/CreditInfo";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TopupInfo from "./TopupInfo/TopupInfo";
import ServerBusyInfo from "./ServerBusyInfo/ServerBusyInfo";
import InvalidPromptInfo from "./InvalidPromptInfo/InvalidPromptInfo";
import GenerationItem from "@/components/GenerationItem/GenerationItem";

interface MobileProfileDropdownProps {
  onClose: () => void;
}

const MobileProfileDropdown = ({ onClose }: MobileProfileDropdownProps) => {
  return (
    <div className="flex flex-col p-5 h-screen gap-[20px] overflow-auto profile-popover-scrollbar">
      <div
        className="sticky top-0 z-10 flex flex-row gap-1.25 items-center text-[#777A80] cursor-pointer"
        onClick={() => onClose()}
      >
        <ChevronLeft size={24} />
        <span className="text-[16px] text-[#ffffff]">Back</span>
      </div>
      <ProfileInfo />
      <CreditInfo />
      <Separator className="bg-[#ffffff0d] border border-[#ffffff0d] max-[960px]:bg-[#ffffff0d]" />
      <div className="flex flex-col gap-1.5">
        <TopupInfo />
        <ServerBusyInfo />
        <InvalidPromptInfo />
        <GenerationItem />
      </div>
    </div>
  );
};

export default MobileProfileDropdown;
