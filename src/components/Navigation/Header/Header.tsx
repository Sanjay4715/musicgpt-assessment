"use client";

import Logo from "@/components/Logo/Logo";
import { PanelLeft, SquareArrowLeft } from "lucide-react";
import { useState } from "react";
import Profile from "../Profile/Profile";
import MobileSidebar from "../Sidebar/MobileSidebar";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <AnimatePresence>
        {openDrawer && <MobileSidebar onClose={() => setOpenDrawer(false)} />}
      </AnimatePresence>
      <header className="min-[960px]:hidden fixed top-0 flex items-center justify-between z-110 responsive-side-padding h-20 w-full p-5">
        <div className="flex flex-row gap-3 items-center">
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
        </div>

        <div className="flex rounded-full justify-end items-center gap-x-2">
          <Profile />
        </div>
      </header>
      <header className="hidden min-[960px]:block fixed left-0 top-0 z-50 h-20 w-[calc(100vw-20px)] pointer-events-none bg-transparent">
        <div className="flex justify-end p-5 items-center gap-2">
          <div className="min-w-72.25 flex gap-7 items-center z-10 p-3 bg-white/10 backdrop-blur-[5px] rounded-[12px] border border-[#262626] text-[#ffffff]">
            <div>
              <div className="text-[14px] font-medium leading-[17.5px]">
                Get unlimited AI Music
              </div>
              <div className="mt-[1px] text-[12px] font-normal text-white/50">
                400 free credits left
              </div>
            </div>
            <Button className="rounded-full bg-[#E4E6E8] text-[#16191C] px-3 py-0.75 h-8 flex text-[14px] leading-[17.5px] border-[#262626] font-normal">
              Upgrade
            </Button>
          </div>
          <Profile />
        </div>
      </header>
    </>
  );
};

export default Header;
