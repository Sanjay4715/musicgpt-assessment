"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const placeholderText = [
  "Lo-Fi beats for relaxing",
  "Upbeat electronic track for a workout",
  "R&B cover of a 2000s pop song",
  "Birthday song for my friend Sarah who turned 25",
  "Instrumental cover of Happy Birthday with jazz style",
  "Cover song of Jingle Bells with Drake's voice",
  'Remix " Rolling in the deep" by Adele in synthwave style',
  "Birthday song for my friend Jack who turned 30",
  "Lo-Fi instrumental song",
  "R&B with female vocals about Los Angeles",
];

export default function VerticalTextCarousel() {
  const [index, setIndex] = useState(0);

  // Change text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholderText.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden flex items-start text-[#777A80] whitespace-nowrap">
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {placeholderText[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
