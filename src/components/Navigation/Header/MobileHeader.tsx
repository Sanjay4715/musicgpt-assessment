"use client";

import Logo from "@/components/Logo/Logo";
import { PanelLeft, SquareArrowLeft } from "lucide-react";
import { useState } from "react";
import Profile from "../Profile/Profile";
import MobileSidebar from "../Sidebar/MobileSidebar";
import { AnimatePresence } from "framer-motion";
import MobileProfileDropdown from "../ProfileDropdown/MobileProfileDropdown";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileHeader = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openMobileProfileDropdown, setOpenMobileProfileDropdown] =
    useState<boolean>(false);

  return (
    <>
      <AnimatePresence>
        {openDrawer && <MobileSidebar onClose={() => setOpenDrawer(false)} />}
      </AnimatePresence>
      <header data-id="mobile-header" className="min-[960px]:hidden fixed top-0 flex items-center justify-between z-110 responsive-side-padding h-20 w-full p-5">
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
        <Sheet>
          <SheetTrigger>
            <div
              onClick={() => setOpenMobileProfileDropdown(true)}
              className="cursor-pointer"
            >
              <Profile />
            </div>
          </SheetTrigger>
          {openMobileProfileDropdown && (
            <SheetContent
              showCloseButton={false}
              className="fixed top-0 left-0 w-full h-full max-w-none! bg-white/5 backdrop-blur-[30px] z-150 transition-none transform-none"
            >
              <VisuallyHidden>
                {/* Hidden title for accessibility */}
                <SheetTitle>Mobile Profile Dropdown</SheetTitle>
              </VisuallyHidden>
              <MobileProfileDropdown
                onClose={() => setOpenMobileProfileDropdown(false)}
              />
            </SheetContent>
          )}
        </Sheet>
      </header>
    </>
  );
};

export default MobileHeader;
