"use client";

import { RippleBadgeProps } from "@/interface/RippleBadgeProps";
import { motion } from "framer-motion";

const RippleBadge = ({ label, isProfileBadge = true }: RippleBadgeProps) => {
  return (
    <div data-id="badge-ripple" className="relative w-10 h-10">
      {/* Badge */}
      <motion.div
        className={`absolute ${isProfileBadge ? "-top-1 -right-1" : "-top-2 right-7"} w-5 h-5 rounded-full bg-[#6BFFAC] flex items-center justify-center text-black text-[10px] font-semibold shadow-lg`}
      >
        {label ? label : ""}
      </motion.div>

      {/* Ripple circles */}
      {/* Ripple circle animation */}
      <motion.div
        className={`absolute ${isProfileBadge ? "-top-1 -right-1" : "-top-2 right-7"} w-5 h-5 rounded-full bg-[#6BFFAC]`}
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 0.6,
        }}
      />
    </div>
  );
};

export default RippleBadge;
