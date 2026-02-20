import Profile from "../Profile/Profile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DesktopProfileDropdown from "../ProfileDropdown/DesktopProfileDropdown";

const DesktopHeader = () => {
  return (
    <header data-id="desktop-header" className="hidden min-[960px]:block fixed left-0 top-0 z-50 h-20 w-[calc(100vw-20px)] bg-transparent">
      <div className="flex justify-end p-5 items-center gap-2">
        <div className="min-w-72.25 flex gap-7 items-center z-10 p-3 bg-white/10 backdrop-blur-[5px] rounded-[12px] border border-[#262626] text-[#ffffff] cursor-pointer">
          <div>
            <div className="text-[14px] font-medium leading-[17.5px]">
              Get unlimited AI Music
            </div>
            <div className="mt-[1px] text-[12px] font-normal text-white/50">
              400 free credits left
            </div>
          </div>
          <Button className="rounded-full bg-[#E4E6E8] text-[#16191C] px-3 py-0.75 h-8 flex text-[14px] leading-[17.5px] border-[#262626] font-normal cursor-pointer hover:bg-[#E4E6E8]/90">
            Upgrade
          </Button>
        </div>
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Profile />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="p-0 rounded-[20px] border-[#1D2125] bg-[#16191C] overflow-hidden"
            >
              <DesktopProfileDropdown />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
