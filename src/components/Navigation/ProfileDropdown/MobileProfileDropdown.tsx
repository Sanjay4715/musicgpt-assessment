"use client";

import { ChevronLeft } from "lucide-react";
import ProfileInfo from "../../GenerationItem/ProfileInfo/ProfileInfo";
import CreditInfo from "../../GenerationItem/CreditInfo/CreditInfo";
import { Separator } from "@/components/ui/separator";
import TopupInfo from "../../GenerationItem/TopupInfo/TopupInfo";
import ProcessinggenerationItem from "@/components/GenerationItem/ProcessingGenerationItem";
import { useGeneratedListStore } from "@/store/useGeneratedListStore";
import GeneratedListItem from "@/components/GeneratedListItem/GeneratedListItem";
import { useEffect } from "react";

interface MobileProfileDropdownProps {
  onClose: () => void;
}

const MobileProfileDropdown = ({ onClose }: MobileProfileDropdownProps) => {
  const { sortedGeneratedList, getGeneratedAudios } = useGeneratedListStore();

  useEffect(() => {
    getGeneratedAudios();
  }, [getGeneratedAudios]);

  return (
    <div
      data-id="mobile-profile-dropdown"
      className="flex flex-col p-5 h-screen gap-[20px] overflow-auto custom-scrollbar profile-popover-scrollbar"
    >
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
        {sortedGeneratedList.map((generatedItem) => (
          <GeneratedListItem key={generatedItem.id} {...generatedItem} />
        ))}
        <ProcessinggenerationItem />
      </div>
    </div>
  );
};

export default MobileProfileDropdown;
