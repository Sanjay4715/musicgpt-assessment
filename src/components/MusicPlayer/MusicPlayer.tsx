import DesktopMusicPlayer from "./DesktopMusicPlayer/DesktopMusicPlayer";
import MobileMusicPlayer from "./MobileMusicPlayer/MobileMusicPlayer";

const MusicPlayer = () => {
  return (
    <>
      <DesktopMusicPlayer />
      <MobileMusicPlayer />
    </>
  );
};

export default MusicPlayer;
