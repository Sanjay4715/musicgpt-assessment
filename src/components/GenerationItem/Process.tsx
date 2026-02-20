"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

interface ProcessProps {
  title: string;
  version: string;
  progress: number;
}

const Process = ({ title, version, progress }: ProcessProps) => {
  return (
    <div className="relative w-full flex flex-row gap-3 p-2 rounded-[12px] items-center cursor-pointer hover:bg-[#1d2125] hover:rounded-[24px] transition-all overflow-hidden">
      {/* Progress background fill */}
      {progress !== 100 && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="h-full bg-linear-to-r from-white/1 to-white/20 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Percentage badge */}
      <div className="relative z-10 h-14 w-14 rounded-[16px] border border-[#1D2125] bg-linear-to-br from-purple-600 to-pink-500 flex items-center justify-center text-[12px] font-medium text-white">
        {progress}%
      </div>

      {/* Title */}
      <div className="relative z-10 flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-[#E4E6E8] truncate text-sm">{title}</span>
        <span className="text-[#898C92] truncate text-sm">
          Processing your audio...
        </span>
      </div>

      {/* Version */}
      <div className="relative z-10 shrink-0">
        <Button className="w-8 h-6 rounded-[8px] border border-[#5D6165] bg-transparent hover:bg-transparent">
          {version}
        </Button>
      </div>
    </div>
  );
};

export default Process;
