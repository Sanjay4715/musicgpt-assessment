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
      className={`min-w-26.75 flex flex-row gap-2 px-4 py-0.75 max-[960px]:py-0 rounded-full transition-colors duration-150 border border-transparent
        ${isActive ? "bg-[#ffffff]/10" : "hover:bg-[#ffffff]/10"}
      `}
    >
      <Image
        src={isActive ? filledIcon : openIcon}
        alt="Home"
        height={20}
        width={20}
      />
      <span className="text-[14px] font-medium text-[#ffffff] leading-7.75 tracking-[2%]">
        {label}
      </span>
    </a>
  );
};

export default NavLink;
