"use client";
import { useState } from "react";
import Image from "next/image";
import AppLogo from "@/assets/AppLogo.svg";
import SearchIcon from "@/assets/SearchIcon.svg";
import HomeOpenIcon from "@/assets/HomeOpenIcon.svg";
import HomeFilledIcon from "@/assets/HomeFilledIcon.svg";
import CreateOpenIcon from "@/assets/CreateOpenIcon.svg";
import CreateFilledIcon from "@/assets/CreateFilledIcon.svg";
import ExploreOpenIcon from "@/assets/ExploreOpenIcon.svg";
import ExploreFilledIcon from "@/assets/ExploreFilledIcon.svg";
import ProfileOpenIcon from "@/assets/ProfileOpenIcon.svg";
import ProfileFilledIcon from "@/assets/ProfileFilledIcon.svg";
import LikedOpenIcon from "@/assets/LikedOpenIcon.svg";
import LikedFilledIcon from "@/assets/LikedFilledIcon.svg";
import USFlag from "@/assets/US.svg";
import { Button } from "@/components/ui/button";
import NavLink from "../NavLink/NavLink";
import { ChevronDown, Plus } from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [isMac] = useState(() => {
    if (typeof navigator !== "undefined") {
      return /Mac|iPhone|iPad|iPod/.test(navigator.platform);
    }
    return false; // fallback for SSR
  });

  const homeMenu = [
    {
      href: "/",
      label: "Home",
      openIcon: HomeOpenIcon,
      filledIcon: HomeFilledIcon,
    },
    {
      href: "/create",
      label: "Create",
      openIcon: CreateOpenIcon,
      filledIcon: CreateFilledIcon,
    },
    {
      href: "/explore",
      label: "Explore",
      openIcon: ExploreOpenIcon,
      filledIcon: ExploreFilledIcon,
    },
  ];

  const libraryMenu = [
    {
      href: "/",
      label: "Profile",
      openIcon: ProfileOpenIcon,
      filledIcon: ProfileFilledIcon,
    },
    {
      href: "/playlist",
      label: "Liked",
      openIcon: LikedOpenIcon,
      filledIcon: LikedFilledIcon,
    },
  ];

  const footerLink = [
    { label: "Pricing", href: "/pricing" },
    { label: "Affiliate", href: "/earn" },
    { label: "API", href: "/api" },
    { label: "About", href: "/about" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Privacy", href: "/privacy-policy" },
  ];

  // /* Frame 1618873661 */

  // /* Auto layout */
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
  // padding: 10px 12px;
  // gap: 2px;

  // width: 168px;
  // height: 94px;

  // background: linear-gradient(233.67deg, rgba(48, 7, 255, 0.29) -2.43%, rgba(209, 40, 150, 0.271346) 58.32%, rgba(255, 86, 35, 0.25) 98.83%), #1D2125;
  // border-radius: 12px;

  // /* Inside auto layout */
  // flex: none;
  // order: 1;
  // align-self: stretch;
  // flex-grow: 0;

  return (
    <div className="text-[#777A80]">
      <aside className="w-50 justify-between flex flex-col h-screen z-1 bg-[rgba(255,255,255,0.03)]">
        <div className="flex flex-col gap-8 p-4">
          <a className="block active:scale-95 transition duration-100">
            <span className="flex items-center gap-2.5">
              <span className="h-8 w-8">
                <Image src={AppLogo} alt="App" width={32} height={32} />
              </span>
              <span className="block text-lg font-medium text-white">
                MusicGPT
              </span>
            </span>
          </a>
          <Button className="flex w-full justify-start h-9.25 cursor-pointer rounded-[30px] border border-white/14 bg-transparent hover:bg-[rgba(255,255,255,.08)] z-2 text-[#777A80]">
            <span className="flex flex-row gap-2">
              <Image src={SearchIcon} alt="search" height={20} width={20} />
              <span className="text-white">Search</span>
            </span>
            <span className="ml-auto font-light text-[0.75rem]">
              {isMac ? "⌘K" : "Ctrl+K"}
            </span>
          </Button>
          <div className="flex flex-col gap-1 items-start">
            {homeMenu.map((menu, index) => (
              <NavLink
                key={index}
                label={menu.label}
                href={menu.href}
                openIcon={menu.openIcon}
                filledIcon={menu.filledIcon}
              />
            ))}
          </div>
        </div>
        <nav className="flex h-[calc(100vh-200px)] flex-col gap-8 overflow-y-auto overflow-x-visible border-t border-transparent p-4 transition-colors duration-200 pretty-scrollbar-4 overscroll-contain">
          <div className="flex flex-col items-start gap-2">
            <div className="px-4 text-sm font-medium leading-9 text-neutral-1100">
              Library
            </div>
            <div className="flex flex-col gap-1 items-start">
              {libraryMenu.map((menu, index) => (
                <NavLink
                  key={index}
                  label={menu.label}
                  href={menu.href}
                  openIcon={menu.openIcon}
                  filledIcon={menu.filledIcon}
                />
              ))}
            </div>
            <span
              role="button"
              className="flex h-9 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-medium text-white hover:bg-white/8"
            >
              <Plus height={24} width={24} />
              <span>New Playlist</span>
            </span>
          </div>
        </nav>
        <div className="flex flex-col gap-5 px-5 py-4 sm:p-4">
          <div className="text-[12px]  text-white flex flex-col gap-2 px-3 py-2.5 rounded-2xl bg-[linear-gradient(135deg,rgba(88,28,135,0.95)_0%,rgba(30,64,175,0.9)_45%,rgba(124,45,18,0.9)_100%)]">
            <div className="font-semibold h-4.5">Modal v6 Pro is here!</div>
            <div className="font-normal">
              Pushing boundaries to the world&apos;s best AI music model
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-2">
            <>
              {footerLink.map((footerItem, index) => (
                <a
                  key={index}
                  href={footerItem.href}
                  className="text-[12px] font-normal"
                >
                  {footerItem.label}
                </a>
              ))}
            </>
            <div className="flex flex-row gap-0.5 items-center">
              <Image src={USFlag} alt="Flag" height={10} width={13.33}/>
              <span className="text-[12px]">EN</span>
              <ChevronDown size={12}/>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
