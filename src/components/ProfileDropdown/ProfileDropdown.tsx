"use client";

import { ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useGeneratedListStore } from "@/store/useGeneratedListStore";
import GeneratedListItem from "@/components/GeneratedListItem/GeneratedListItem";
import { useEffect } from "react";
import { useLiveGenerationStore } from "@/store/useLiveGenerationStore";
import { sortArrayByCreatedAt } from "@/common";
import ProcessingGenerationItem from "@/components/GenerationItem/ProcessingGenerationItem";
import { ProfileDropdownProps } from "@/interface/ProfileDropdown";
import ProfileInfo from "../GenerationItem/ProfileInfo/ProfileInfo";
import CreditInfo from "../GenerationItem/CreditInfo/CreditInfo";
import TopupInfo from "../GenerationItem/TopupInfo/TopupInfo";
import { API_STATUS } from "@/enums";
import SkeletonGeneratedItems from "../SkeletonGeneratedItems/SkeletonGeneratedItems";

const ProfileDropdown = ({ isMobile, onClose }: ProfileDropdownProps) => {
  const { sortedGeneratedList, getGeneratedAudios, apiStatus } =
    useGeneratedListStore();
  const { latestStatusData } = useLiveGenerationStore();

  useEffect(() => {
    getGeneratedAudios();
  }, [getGeneratedAudios]);

  return (
    <div
      data-id={
        isMobile ? "mobile-profile-dropdown" : "desktop-profile-dropdown"
      }
      className={`${
        isMobile
          ? "flex flex-col p-5 h-screen gap-[20px] overflow-auto custom-scrollbar profile-popover-scrollbar"
          : "w-105 max-[960px]:w-screen rounded-[20px] border border-[#1D2125] bg-[#16191C] max-[960px]:w-screen h-[55vh] max-h-150 max-[960px]:h-screen overflow-auto flex flex-col gap-5 py-5 px-4 text-[#777A80] custom-scrollbar profile-popover-scrollbar"
      }`}
    >
      {isMobile && (
        <div
          className="sticky top-0 z-10 flex flex-row gap-1.25 items-center text-[#777A80] cursor-pointer"
          onClick={onClose}
        >
          <ChevronLeft size={24} />
          <span className="text-[16px] text-[#ffffff]">Back</span>
        </div>
      )}
      <ProfileInfo />
      <CreditInfo />
      <Separator className="bg-[#ffffff0d] border border-[#ffffff0d] max-[960px]:bg-[#ffffff0d]" />
      <div className="flex flex-col gap-1">
        {sortArrayByCreatedAt(latestStatusData)?.map((data) => (
          <ProcessingGenerationItem key={data.id} {...data} />
        ))}
        {apiStatus === API_STATUS.SUCCESS ? (
          <>
            <TopupInfo />
            {sortedGeneratedList.map((generatedItem) => (
              <GeneratedListItem key={generatedItem.id} {...generatedItem} />
            ))}
          </>
        ) : (
          <SkeletonGeneratedItems />
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
