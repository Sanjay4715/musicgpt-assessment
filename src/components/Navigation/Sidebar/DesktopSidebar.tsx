"use client";
import Logo from "@/components/Logo/Logo";
import SearchOnSidebar from "../SearchOnSidebar/SearchOnSidebar";
import HomeMenu from "../HomeMenu/HomeMenu";
import LibraryMenu from "../LibraryMenu/LibraryMenu";
import SidebarFooter from "../SidebarFooter/SidebarFooter";

const DesktopSidebar = () => {
  return (
    <div className="relative block tab:hidden z-110">
      <aside className="text-[#777A80] fixed z-1 hidden h-screen w-50 shrink-0 flex-col justify-between min-[960px]:flex bg-[rgba(255,255,255,0.03)]">
        <div className="flex flex-col gap-8 p-4">
          <Logo />
          <SearchOnSidebar />
          <HomeMenu />
        </div>
        <nav className="text-[#777A80] flex h-[calc(100vh-200px)] flex-col gap-8 overflow-y-auto overflow-x-visible border-t border-transparent p-4 transition-colors duration-200 pretty-scrollbar-4 overscroll-contain">
          <LibraryMenu />
        </nav>
        <div className="flex flex-col gap-5 px-5 py-4 sm:p-4">
          <div className="text-[12px] leading-[1.46] tracking-[0.01em] text-[#FFFFFF] flex flex-col gap-0.5 px-3 py-2.5 rounded-2xl bg-[#1D2125] bg-[linear-gradient(233.67deg,rgba(48,7,255,0.29)_-2.43%,rgba(209,40,150,0.271346)_58.32%,rgba(255,86,35,0.25)_98.83%)]">
            <div className="font-semibold">Modal v6 Pro is here!</div>
            <div className="font-normal text-white/64">
              Pushing boundaries to the world&apos;s best AI music model
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-2">
            <SidebarFooter />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DesktopSidebar;
