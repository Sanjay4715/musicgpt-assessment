import { Separator } from "@/components/ui/separator";
import ProfileInfo from "../../GenerationItem/ProfileInfo/ProfileInfo";
import CreditInfo from "../../GenerationItem/CreditInfo/CreditInfo";
import TopupInfo from "../../GenerationItem/TopupInfo/TopupInfo";
import InvalidPromptInfo from "../../GenerationItem/InvalidPromptInfo/InvalidPromptInfo";
import GenerationItem from "@/components/GenerationItem/GenerationItem";
import ProcessingGenerationItem from "@/components/GenerationItem/ProcessingGenerationItem";
import ServerBusyInfo from "@/components/GenerationItem/ServerBusyInfo/ServerBusyInfo";

const DesktopProfileDropdown = () => {
  return (
    <div data-id="desktop-profile-dropdown" className="w-105 max-[960px]:w-screen rounded-[20px] border border-[#1D2125] bg-[#16191C] overflow-hidden">
      <div className="max-[960px]:w-screen h-[55vh] max-h-150 max-[960px]:h-screen overflow-auto flex flex-col gap-5 py-5 px-4 text-[#777A80] custom-scrollbar profile-popover-scrollbar">
        <ProfileInfo />
        <CreditInfo />
        <Separator className="bg-[#ffffff0d] border border-[#ffffff0d] max-[960px]:bg-[#ffffff0d]" />
        <div className="flex flex-col gap-1.5">
          <TopupInfo />
          <ServerBusyInfo />
          <InvalidPromptInfo />
          <GenerationItem />
          <GenerationItem />
          <ProcessingGenerationItem />
        </div>
      </div>
    </div>
  );
};

export default DesktopProfileDropdown;
