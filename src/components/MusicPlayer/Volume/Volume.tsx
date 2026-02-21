import { Slider } from "@/components/ui/slider";
import { VolumeProps } from "@/interface/Music";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

const Volume = ({ volume, handleVolume }: VolumeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleMute = () => {
    if (volume === 0) {
      handleVolume(100);
    } else {
      handleVolume(0);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative flex items-center
        h-[34px]
        rounded-full
        bg-[#0a0c0d]
        border border-[#ffffff1a]
        backdrop-blur-xl
        transition-all duration-300 ease-out
        overflow-hidden
        ${isHovered ? "w-[106px] bg-[#1d2125]" : "w-[34px]"}
        text-[#ffffff] cursor-pointer
      `}
    >
      <div className="h-[34px] w-[34px] flex items-center justify-center rounded-full transition-transform active:scale-95 flex-shrink-0">
        {volume === 0 ? (
          <VolumeX size={isHovered ? 14 : 18} onClick={() => toggleMute()} />
        ) : 1 <= volume && volume <= 50 ? (
          <Volume1 size={isHovered ? 14 : 18} onClick={() => toggleMute()} />
        ) : (
          <Volume2 size={isHovered ? 14 : 18} onClick={() => toggleMute()} />
        )}
      </div>

      <div
        className={`
          flex items-center
          h-full pr-2
          transition-all duration-300 ease-out
          ${isHovered ? "w-[72px] opacity-100" : "w-0 opacity-0"}
        `}
      >
        <Slider
          value={[volume]}
          onValueChange={(val: number[]) => handleVolume(val[0])}
          max={100}
          step={1}
          className="h-1.5 flex-1 rounded-full bg-[#ffffff20] relative volume-slider"
        />
      </div>
    </div>
  );
};

export default Volume;
