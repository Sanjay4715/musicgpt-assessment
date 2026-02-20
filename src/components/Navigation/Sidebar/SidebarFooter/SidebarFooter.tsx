import { ChevronDown } from "lucide-react";
import Image from "next/image";

import USFlag from "@/assets/US.svg";

const SidebarFooter = () => {
  const footerLink = [
    { label: "Pricing", href: "/pricing" },
    { label: "Affiliate", href: "/earn" },
    { label: "API", href: "/api" },
    { label: "About", href: "/about" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Privacy", href: "/privacy-policy" },
  ];
  return (
    <>
      <>
        {footerLink.map((footerItem, index) => (
          <a
            key={index}
            href={footerItem.href}
            className="text-[12px] text-white/50 font-normal"
          >
            {footerItem.label}
          </a>
        ))}
      </>
      <div className="flex flex-row gap-0.5 items-center">
        <Image src={USFlag} alt="Flag" height={10} width={13.33} />
        <span className="text-[12px]">EN</span>
        <ChevronDown size={12} />
      </div>
    </>
  );
};

export default SidebarFooter;
