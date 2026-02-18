
import HomeOpenIcon from "@/assets/HomeOpenIcon.svg";
import HomeFilledIcon from "@/assets/HomeFilledIcon.svg";
import CreateOpenIcon from "@/assets/CreateOpenIcon.svg";
import CreateFilledIcon from "@/assets/CreateFilledIcon.svg";
import ExploreOpenIcon from "@/assets/ExploreOpenIcon.svg";
import ExploreFilledIcon from "@/assets/ExploreFilledIcon.svg";

import NavLink from "../NavLink/NavLink";

const HomeMenu = () => {
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
  return (
    <div className="flex flex-col items-start gap-1">
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
  );
};

export default HomeMenu;