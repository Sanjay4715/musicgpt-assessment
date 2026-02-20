"use client";

import { motion } from "framer-motion";

export default function RippleBadge() {
  return (
    <div data-id="badge-ripple" className="relative w-10 h-10">
      {/* Badge */}
      <motion.div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#6BFFAC] flex items-center justify-center text-black text-[10px] font-semibold shadow-lg">
        2
      </motion.div>

      {/* Ripple circles */}
      {/* Ripple circle animation */}
      <motion.div
        className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#6BFFAC]"
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
}
