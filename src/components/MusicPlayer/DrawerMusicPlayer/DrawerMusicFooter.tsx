import MusicTimer from "@/components/MusicTimer/MusicTimer";
import { DrawerFooter } from "@/components/ui/drawer";
import { Repeat, Shuffle } from "lucide-react";
import Image from "next/image";
import MusicTimeline from "../MusicTimeline/MusicTimeline";
import NextFilledIcon from "@/assets/NextFilledIcon.svg";
import PrevFilledIcon from "@/assets/PrevFilledIcon.svg";
import PlayFilledIcon from "@/assets/PlayFilledIcon.svg";
import PausedFilledIcon from "@/assets/PausedFilledIcon.svg";
import { DrawerMusicPlayerProps } from "@/interface/Music";

const DrawerMusicFooter = ({
  currentTime,
  duration,
  togglePlay,
  isPlaying,
  ...musicTimelineProps
}: DrawerMusicPlayerProps) => {
  return (
    <DrawerFooter data-id="drawer-music-footer" className="fixed right-0 left-0 bottom-0 gap-0 z-2 px-0 pb-0 border border-transparent bg-transparent text-[#777A80]">
      <MusicTimer
        currentTime={currentTime}
        duration={duration}
        className="pr-1"
      />
      <div className="flex flex-row items-center justify-evenly h-16">
        <div>
          <Shuffle />
        </div>
        <div className="flex gap-3 shrink-0 items-center">
          <div className="p-2">
            <Image
              src={PrevFilledIcon}
              alt="Previous"
              width={30}
              height={30}
              className="opacity-0.9"
            />
          </div>
          <div
            className="p-2 rounded-full bg-[#ffffff1a] flex items-center border-0 hover:bg-[#ffffff26]"
            onClick={togglePlay}
          >
            <Image
              src={isPlaying ? PausedFilledIcon : PlayFilledIcon}
              alt={isPlaying ? "Pause" : "Play"}
              width={30}
              height={30}
              className="opacity-0.9"
            />
          </div>
          <div className="p-2">
            <Image
              src={NextFilledIcon}
              alt="Next"
              width={30}
              height={30}
              className="opacity-0.9"
            />
          </div>
        </div>
        <div>
          <Repeat />
        </div>
      </div>

      <MusicTimeline
        isDrawer
        currentTime={currentTime}
        duration={duration}
        {...musicTimelineProps}
      />
    </DrawerFooter>
  );
};

export default DrawerMusicFooter;
