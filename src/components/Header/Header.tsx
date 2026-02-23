"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MobileSidebar from "../Sidebar/MobileSidebar";
import { Button } from "../ui/button";
import { PanelLeft, SquareArrowLeft } from "lucide-react";
import Logo from "../Logo/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Profile from "../Profile/Profile";
import { useCommonStore } from "@/store/useCommonStore";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { isProfileDropdown, setStoreState } = useCommonStore();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 960);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleProfileDropDown = (value: boolean) =>
    setStoreState({ isProfileDropdown: value });

  return (
    <>
      <AnimatePresence>
        {openDrawer && <MobileSidebar onClose={() => setOpenDrawer(false)} />}
      </AnimatePresence>

      <header
        data-id={isMobile ? "mobile-header" : "desktop-header"}
        className={`${isMobile ? "min-[960px]:hidden fixed top-0 flex items-center justify-between z-110 responsive-side-padding h-20 w-full p-5" : "hidden min-[960px]:block fixed left-0 top-0 z-50 h-20 w-[calc(100vw-20px)] bg-transparent"}`}
      >
        <div
          className={`${isMobile ? "flex flex-row gap-3 items-center" : "flex justify-end p-5 items-center gap-2"}`}
        >
          {!isMobile && (
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
          )}
          {isMobile ? (
            <>
              <div
                onClick={() => setOpenDrawer(!openDrawer)}
                className="box-border size-10 rounded-[12px] border border-[#3A3E42] bg-white/8 text-white transition-[background-color] backdrop-blur-md hover:bg-white/16 inline-flex items-center justify-center duration-200 cursor-pointer"
              >
                {openDrawer ? (
                  <SquareArrowLeft size={"1.25rem"} />
                ) : (
                  <PanelLeft size={"1.25rem"} />
                )}
              </div>
              <Logo />
            </>
          ) : (
            <div className="flex">
              <DropdownMenu
                open={isProfileDropdown}
                onOpenChange={handleProfileDropDown}
              >
                <DropdownMenuTrigger className="cursor-pointer">
                  <Profile />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="p-0 rounded-[20px] border-[#1D2125] bg-[#16191C] overflow-hidden"
                >
                  <ProfileDropdown isMobile={false} />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>

        {isMobile && (
          <Sheet open={isProfileDropdown} onOpenChange={handleProfileDropDown}>
            <SheetTrigger className="cursor-pointer">
              <Profile />
            </SheetTrigger>

            <SheetContent
              showCloseButton={false}
              className="fixed top-0 left-0 w-full h-full max-w-none! bg-white/5 backdrop-blur-[30px] z-150 transition-none transform-none"
            >
              <VisuallyHidden>
                <SheetTitle>Mobile Profile Dropdown</SheetTitle>
              </VisuallyHidden>

              <ProfileDropdown
                isMobile={true}
                onClose={() => handleProfileDropDown(false)}
              />
            </SheetContent>
          </Sheet>
        )}
      </header>
    </>
  );
};

export default Header;
