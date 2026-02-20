"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { Textarea } from "../ui/textarea";
import VerticalTextCarousel from "../VerticalTextCaraousel/VerticalTextCarousel";

const TextareaAutosize = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState("");
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 639px)").matches
      : false,
  );

  // Detect screen size
  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // Resize logic
  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;

    const min = isMobile ? 160 : 64;
    const max = isMobile ? 232 : 160;

    el.style.height = "auto";
    el.style.height = Math.min(Math.max(el.scrollHeight, min), max) + "px";
  }, [isMobile]);

  useEffect(() => resizeTextarea(), [resizeTextarea]);

  return (
    <div className="relative w-full">
      {/* Animated placeholder overlay */}
      {!value && (
        <div className="absolute left-0 w-full px-5 py-5 text-[16px] text-gray-500 flex items-start overflow-hidden pointer-events-none">
          <VerticalTextCarousel />
        </div>
      )}

      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onInput={resizeTextarea}
        spellCheck
        className="
          overflow-y-auto
          text-[#ffffff]
          border-0 ring-0 focus:ring-0 focus-visible:ring-0 outline-none
          w-full shadow-none p-5 resize-none
          bg-transparent
          custom-scrollbar textarea-prompt-scrollbar
          transition-[height] duration-200 ease-out
        "
      />
    </div>
  );
};

export default TextareaAutosize;
