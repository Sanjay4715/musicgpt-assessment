import { DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DrawerMusicPlayerProps } from "@/interface/Music";
import DrawerThumbnailTitle from "./DrawerThumbnailTitle";
import DrawerMusicFooter from "./DrawerMusicFooter";
import DrawerMusicContent from "./DrawerMusicContent";

const DrawerMusicPlayer = ({
  isPlaying,
  currentTime,
  duration,
  togglePlay,
  ...musicTimelineProps
}: DrawerMusicPlayerProps) => {
  return (
    <DrawerContent
      data-id="drawer-music-player"
      className="flex min-[960px]:hidden flex-col h-[85vh] custom-top-bar bg-[#0a0c0d] border-[#0a0c0d]"
    >
      <VisuallyHidden>
        <DrawerTitle>Mobile Music Player Drawer</DrawerTitle>
      </VisuallyHidden>
      <DrawerThumbnailTitle />
      <DrawerMusicContent />
      <DrawerMusicFooter
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        togglePlay={togglePlay}
        {...musicTimelineProps}
      />
    </DrawerContent>
  );
};

export default DrawerMusicPlayer;
