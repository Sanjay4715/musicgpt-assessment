"use client";

import { motion } from "framer-motion";
import SearchOnSidebar from "../SearchOnSidebar/SearchOnSidebar";
import HomeMenu from "../HomeMenu/HomeMenu";
import LibraryMenu from "../LibraryMenu/LibraryMenu";
import SidebarFooter from "../SidebarFooter/SidebarFooter";

interface MobileSidebarProps {
  onClose: () => void;
}

const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const MobileSidebar = ({ onClose }: MobileSidebarProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Clickable overlay */}
      <motion.div
        className="absolute inset-0"
        onClick={onClose}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />

      {/* Sidebar content */}
      <motion.aside
        className="shadow-lg fixed flex flex-col left-0 top-0 h-full w-75 bg-white/3 backdrop-blur-[30px] min-[960px]:hidden"
        variants={sidebarVariants}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Main Content */}
        <div className="flex flex-col pt-24 px-5 pb-4 gap-8">
          <SearchOnSidebar />
          <HomeMenu />
        </div>
         
        <div className="px-4 py-5 pretty-scrollbar-4 flex-1 overflow-y-auto overscroll-contain border-t border-transparent">
          <LibraryMenu />
        </div>

        {/* Footer */}
        <div className="px-5 py-4 sm:p-4">
          <div className="flex flex-row flex-wrap items-center text-sm text-white/50 gap-x-6 gap-y-5 sm:gap-x-3 sm:gap-y-1">
            <SidebarFooter />
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
};

export default MobileSidebar;
