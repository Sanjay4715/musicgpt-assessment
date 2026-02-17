import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  openIcon: string | StaticImport;
  filledIcon: string | StaticImport;
}

const NavLink = ({ href, label, openIcon, filledIcon }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <a
      href={href}
      className={`
  flex flex-row gap-2 
  pt-1 pr-4 pb-1 pl-4
  rounded-[30px] 
  transition-colors duration-150
  ${isActive ? "border border-[#262626] bg-[#262626]" : "border border-transparent hover:border-[#262626] hover:bg-[#262626]"}
`}
    >
      <Image
        src={isActive ? filledIcon : openIcon}
        alt="Home"
        height={20}
        width={20}
      />
      <span className="text-[14px]/[31px] font-medium text-[#ffffff]">
        {label}
      </span>
    </a>
  );
};

export default NavLink;
