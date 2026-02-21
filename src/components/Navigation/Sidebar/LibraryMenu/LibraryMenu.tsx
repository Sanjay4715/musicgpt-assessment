import ProfileOpenIcon from "@/assets/ProfileOpenIcon.svg";
import ProfileFilledIcon from "@/assets/ProfileFilledIcon.svg";
import LikedOpenIcon from "@/assets/LikedOpenIcon.svg";
import LikedFilledIcon from "@/assets/LikedFilledIcon.svg";
import { Plus } from "lucide-react";
import NavLink from "../NavLink/NavLink";

const LibraryMenu = () => {
  const libraryMenu = [
    {
      href: "/profile",
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

  return (
    <div className="flex flex-col items-start gap-0.75 max-[960px]:gap-2 overflow-auto custom-scrollbar profile-popover-scrollbar">
      <div className="px-4 text-sm font-medium leading-9 text-[#777A80]">
        Library
      </div>
      <div className="flex flex-col gap-0.75 items-start max-[960px]:gap-2">
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
      <span className="flex h-9 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-medium text-white hover:bg-white/8">
        <Plus height={24} width={24} />
        <span>New Playlist</span>
      </span>
    </div>
  );
};

export default LibraryMenu;
