"use client";

import RippleBadge from "../RippleBadge/RippleBadge";


interface ProfileProps {
  badge?: boolean;
  isFromProfilePopover?: boolean;
}

const Profile = ({
  badge = true,
  isFromProfilePopover = false,
}: ProfileProps) => {
  return (
    <div
      className={`relative ${isFromProfilePopover ? "w-14 h-14" : "w-10 h-10"}`}
    >
      {/* Gradient Ring */}
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(312.58deg,#C800FF_17.25%,#FF2C9B_37.17%,#FF7B00_62.95%,#FF8504_75.03%,#FFD363_82.54%)] p-0.5">
        {/* Inner Dark Circle */}
        <div className="w-full h-full rounded-full bg-[#16191C] flex items-center justify-center text-white text-[20px] font-normal">
          J
        </div>
      </div>
      {badge && <RippleBadge />}
    </div>
  );
};

export default Profile;
