import Image2 from "@/assets/Image2.webp";
import { Button } from "@/components/ui/button";
import { DrawerHeader } from "@/components/ui/drawer";
import { EllipsisVertical, Logs } from "lucide-react";
import Image from "next/image";

const DrawerThumbnailTitle = () => {
  return (
    <DrawerHeader
      data-id="drawer-music-thumbnail-title"
      className="flex items-center justify-between pb-6 pt-9 px-0 text-white py-0"
    >
      <div className="flex gap-2.5 justify-end w-full">
        <Logs size={20} />
        <EllipsisVertical size={20} />
      </div>
      <div className="w-full flex items-start px-6 pb-6 gap-4">
        <div>
          <Image
            src={Image2}
            alt="generation"
            width={96}
            height={96}
            className="rounded-[26px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[16px] font-semibold">
            The Satirical Echo of the world
          </div>
          <div className="flex gap-2 font-medium text-[#FFFFFF80] text-[14px]">
            <span className="truncate">@username</span>
            <span>•</span>
            <span>{"<1K"} Plays</span>
          </div>
          <div className="flex items-start w-full">
            <Button className="px-4 py-0 border border-[#ffffff1a] rounded-[20px] bg-transparent hover:bg-[#ffffff1a] cursor-pointer">
              Share
            </Button>
          </div>
        </div>
      </div>
    </DrawerHeader>
  );
};

export default DrawerThumbnailTitle;
