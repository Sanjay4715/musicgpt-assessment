import { Separator } from "@/components/ui/separator";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import CreditInfo from "./CreditInfo/CreditInfo";
import TopupInfo from "./TopupInfo/TopupInfo";
import ServerBusyInfo from "./ServerBusyInfo/ServerBusyInfo";
import InvalidPromptInfo from "./InvalidPromptInfo/InvalidPromptInfo";
import GenerationItem from "@/components/GenerationItem/GenerationItem";

const ProfileDropdown = () => {
  return (
    <div className="w-105 max-[960px]:w-screen rounded-[20px] border border-[#1D2125] bg-[#16191C] overflow-hidden">
      <div className="max-[960px]:w-screen h-[55vh] max-h-150 max-[960px]:h-screen overflow-auto flex flex-col gap-5 py-5 px-4 text-[#777A80] profile-popover-scrollbar">
        <ProfileInfo />
        <CreditInfo />
        <Separator className="bg-[#ffffff0d] border border-[#ffffff0d] max-[960px]:bg-[#ffffff0d]" />
        <div className="flex flex-col gap-1.5">
          <TopupInfo />
          <ServerBusyInfo />
          <InvalidPromptInfo />
          <GenerationItem />
          <div data-id="generation-1 flex flex-row items-center gap-[10.11px] p-[8px]">
            <div className="w-16 h-16 rounded-[16px] border items-center flex justify-center border-[#3A3E42] bg-[radial-gradient(227.54%_59.42%_at_42.03%_86.23%,#FF6200_0%,rgba(170,0,255,0.5)_30.42%,rgba(0,0,0,0)_100%)]">
              0%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
