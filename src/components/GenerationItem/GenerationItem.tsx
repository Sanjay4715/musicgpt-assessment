"use client";
import Image from "next/image";
import GenerationImage from "@/assets/Generation.png";
import PlayIcon from "@/assets/PlayIcon.svg";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  Ellipsis,
  Play,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

const GenerationItem = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 960);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="group flex flex-row gap-3 p-2 rounded-[12px] items-center cursor-pointer hover:bg-[#1d2125] hover:rounded-[24px] transition-all overflow-hidden">
      <div className="shrink-0 w-14 h-14 rounded-[16px] flex items-center justify-center relative">
        <Image
          src={GenerationImage}
          alt="generation"
          width={80}
          height={80}
          className="object-cover rounded-[16px]"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/5 backdrop-blur-[20px] w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Image alt="play" src={PlayIcon} width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-[14px] font-normal flex-1 min-w-0">
        <span className="text-[#E4E6E8] truncate text-sm">
          Out in the street
        </span>
        <span className="text-[#898C92] text-sm line-clamp-1 break-words">
          With this lyrics [Intro] Whatever you think… Office ko scene ready
          bro… Gwache Solti on duty… Kaam chai pending ho… 😏 [Verse 1 – Office
          Madness] Whatever you think, gara ASAP bro Experienced bhayera ni k
          ho, kaam chai slow Testo haina bhai, saas ferne time ni chaina Yeta
          meeting uta meeting, kaam garne chai haina Bonding bonding bhanchau,
          bonding bhaneko k ho? Proper ticket update kun juni ma dine ho?
        </span>
      </div>
      {/* Actions */}
      <div className="flex shrink-0 items-center gap-[15px] text-[#777A80]">
        {/* Hover Actions */}
        <div className="hidden group-hover:flex flex-row items-center gap-[15px]">
          {!isMobile && (
            <>
              <ThumbsUp size={20} className="hover:text-white" />
              <ThumbsDown size={20} className="hover:text-white" />
            </>
          )}
          <Button className="w-8 h-6 rounded-[8px] border border-[#5D6165] bg-transparent hover:bg-transparent">
            v1
          </Button>
        </div>
        {isMobile && <ArrowDownToLine size={20} className="hover:text-white" />}
        {/* Always visible */}
        <Ellipsis size={24} />
      </div>
    </div>
  );
};

export default GenerationItem;
