import { MusicControlsProps } from "@/interface/Music";
import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";

const MusicControls = ({
  fromMobilePlayer = false,
  isPlaying,
  onPlayPause,
}: MusicControlsProps) => {
  return (
    <div
      data-id="music-controls"
      className=" flex flex-row gap-4 z-10 items-center justify-end bg-transparent"
    >
      {!fromMobilePlayer && (
        <Shuffle
          size={20}
          className="text-[#ffffff80] hover:text-white cursor-pointer"
        />
      )}
      <SkipBack
        size={20}
        className="text-[#ffffff80] hover:text-white cursor-pointer max-[342px]:hidden"
      />
      <div
        className={`flex items-center rounded-full
          ${
            fromMobilePlayer
              ? "p-2  bg-[#ffffff1a] border-0 hover:bg-[#ffffff26]"
              : `h-[42px] w-[42px] justify-center border border-[#ffffff]/5`
          }`}
        onClick={(e) => {
          e.stopPropagation();
          onPlayPause();
        }}
      >
        {isPlaying ? (
          <Pause
            size={24}
            className=" flex items-center text-[#ffffff80] hover:text-white cursor-pointer"
          />
        ) : (
          <Play
            size={24}
            className=" flex items-center text-[#ffffff80] hover:text-white cursor-pointer"
          />
        )}
      </div>
      <SkipForward
        size={20}
        className="text-[#ffffff80] hover:text-white cursor-pointer max-[342px]:hidden"
      />
      {!fromMobilePlayer && (
        <Repeat
          size={20}
          className="text-[#ffffff80] hover:text-white cursor-pointer"
        />
      )}
    </div>
  );
};

export default MusicControls;
