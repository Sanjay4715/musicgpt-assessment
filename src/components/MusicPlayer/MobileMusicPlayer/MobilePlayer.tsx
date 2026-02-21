import MusicTimer from "@/components/MusicTimer/MusicTimer";

import MusicThumbnailAndTitle from "../MusicThumbnailAndTitle/MusicThumbnailAndTitle";
import { MusicPlayerProps } from "@/interface/Music";
import MusicControls from "../MusicControls/MusicControls";

const MobilePlayer = ({
  currentTime,
  duration,
  togglePlay,
  isPlaying,
}: MusicPlayerProps) => {
  return (
    <div
      data-id="mobile-player"
      className="flex w-full shrink-0 items-center justify-between gap-4 px-2 py-1"
    >
      <div className="flex w-full items-center justify-start gap-8">
        <MusicThumbnailAndTitle isMobilePlayer={true} />
        <div className="flex gap-3 shrink-0 items-center justify-center">
          <MusicTimer currentTime={currentTime} duration={duration} />
          <MusicControls
            fromMobilePlayer
            isPlaying={isPlaying}
            onPlayPause={togglePlay}
          />
        </div>
      </div>
    </div>
  );
};

export default MobilePlayer;
