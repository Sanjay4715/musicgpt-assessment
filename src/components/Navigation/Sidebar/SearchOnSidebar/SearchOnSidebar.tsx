import SearchIcon from "@/assets/SearchIcon.svg";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const SearchOnSidebar = () => {
  const [isMac] = useState(() => {
    if (typeof navigator !== "undefined") {
      return /Mac|iPhone|iPad|iPod/.test(navigator.platform);
    }
    return false; // fallback for SSR
  });
  return (
    <Button className="flex w-full justify-start h-9.25 cursor-pointer rounded-[30px] border border-white/14 bg-transparent hover:bg-[rgba(255,255,255,.08)] z-2 text-[#777A80]">
      <span className="flex flex-row gap-2">
        <Image src={SearchIcon} alt="search" height={20} width={20} />
        <span className="text-white">Search</span>
      </span>
      <span className="ml-auto font-light text-[0.75rem]">
        {isMac ? "⌘K" : "Ctrl+K"}
      </span>
    </Button>
  );
};

export default SearchOnSidebar;
