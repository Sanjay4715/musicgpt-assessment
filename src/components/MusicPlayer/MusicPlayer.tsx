"use client";
import { useEffect, useRef, useState } from "react";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import MusicTimeline from "./MusicTimeline/MusicTimeline";
import MusicPlayerOptions from "./MusicPlayerOptions/MusicPlayerOptions";
import MusicThumbnailAndTitle from "./MusicThumbnailAndTitle/MusicThumbnailAndTitle";
import MusicControls from "./MusicControls/MusicControls";
import MusicFavoriteAndShare from "./MusicfavoriteAndShare/MusicFavoriteAndShare";
import ExpandedArea from "./ExpandedArea/ExpandedArea";
import DrawerMusicPlayer from "./DrawerMusicPlayer/DrawerMusicPlayer";

const MusicPlayer = () => {
  const {
    musicToPlay,
    currentTimestamp,
    setCurrentTimestamp,
    setMusicPlayPause,
    isMusicPaused,
    toggleMusicPlayer,
  } = useMusicPlayerStore();

  const { file_output_0, audio_length_ms } = musicToPlay;
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const timelineRef = useRef<HTMLButtonElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [duration, setDuration] = useState<number>(audio_length_ms ?? 0);
  const [currentTime, setCurrentTime] = useState<number>(currentTimestamp ?? 0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 960);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Load audio metadata and update current time
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const controlPlayback = async () => {
      try {
        if (isMusicPaused) {
          audio.pause();
          setIsPlaying(false);
        } else {
          await audio.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.warn("Playback failed:", err);
      }
    };

    controlPlayback();

    const onUpdate = () => {
      if (!isDragging) {
        setCurrentTime(audio.currentTime);
        setCurrentTimestamp(audio.currentTime);
      }
    };
    const setMeta = () => {
      if (!isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    // If metadata already loaded
    if (audio.readyState >= 1) {
      setMeta();
    } else {
      audio.addEventListener("loadedmetadata", setMeta);
    }

    audio.addEventListener("timeupdate", onUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", setMeta);
      audio.removeEventListener("timeupdate", onUpdate);
    };
  }, [isDragging, isMusicPaused]);

  // Timeline seek
  const seek = (clientX: number) => {
    if (!timelineRef.current || !audioRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const percent = Math.min(
      Math.max((clientX - rect.left) / rect.width, 0),
      1,
    );
    const newTime = percent * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setCurrentTimestamp(newTime);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      if (isDragging) seek(e.clientX);
    };
    const onMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      setIsDragging(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, duration]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setMusicPlayPause(isPlaying);
    } catch (err) {
      console.error("Playback failed:", err);
    }
  };

  const progress = duration ? currentTime / duration : 0;
  const percent = progress * 100;

  const handleVolumeChange = (value: number) => {
    const newVolume = Math.min(Math.max(value, 0), 1);
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    seek(e.clientX);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100; // convert 0–100 → 0–1
    }
  }, [volume]);

  return (
    <div
      data-id="music-player"
      className={`fixed ${
        isMobile
          ? ` w-full z-30 bottom-5 px-2`
          : `bottom-4 left-2 w-full md:left-0 pointer-events-none transition-all duration-300`
      }
          max-w-[100vw] min-[960px]:max-w-[calc(100vw-var(--sidebar-width))] min-[960px]:ml-(--sidebar-width)
        `}
    >
      <div
        className={`items-center flex flex-col ${
          isMobile
            ? `bg-[#1d212599] backdrop-blur-[50px] rounded-lg w-full border border-[#ffffff1a] hover:bg-[#ffffff1a] cursor-pointer`
            : "relative mx-auto w-[calc(100%-28px)] min-[960px]:w-[calc(100%-20px)] min-[960px]:max-w-225"
        }`}
      >
        <audio ref={audioRef} src={file_output_0} preload="metadata" />

        {isMobile && (
          <div className="absolute -top-3 right-[-2] z-80">
            <Button
              className="w-6 h-6 rounded-full bg-[#0000001a] border border-[#ffffff1a] text-white hover:bg-[ffffff1a] cursor-pointer"
              onClick={() => toggleMusicPlayer(false)}
            >
              <X />
            </Button>
          </div>
        )}

        <div
          className={`w-full ${
            isMobile
              ? `flex shrink-0 items-center justify-between gap-4 px-2 py-1`
              : `relative rounded-[24px] transition-all duration-500 ease-in-out bg-white/5 backdrop-blur-xl border border-white/10 pointer-events-auto shadow-2xl ${isExpanded ? "h-103" : "h-22"}`
          }`}
          onMouseEnter={() => (!isMobile ? setIsHovered(true) : () => {})}
          onMouseLeave={() => (!isMobile ? setIsHovered(false) : () => {})}
        >
          {/* Timeline */}
          <MusicTimeline
            isMobile={isMobile}
            timelineRef={timelineRef}
            isDragging={isDragging}
            handleMouseDown={handleMouseDown}
            percent={percent}
            progress={progress}
            currentTime={currentTime}
            duration={duration ?? 0}
          />

          {isMobile && (
            <div
              data-id="mobile-close-player-icon"
              className="absolute -top-3 right-[-2] z-80"
            >
              <Button
                className="w-6 h-6 rounded-full bg-[#0000001a] border border-[#ffffff1a] text-white hover:bg-[ffffff1a] cursor-pointer"
                onClick={() => toggleMusicPlayer(false)}
              >
                <X />
              </Button>
            </div>
          )}

          {!isMobile && isHovered && !isDragging && (
            <MusicPlayerOptions
              isExpanded={isExpanded}
              handleExpanded={setIsExpanded}
              volume={volume}
              handleVolume={handleVolumeChange}
            />
          )}

          <div
            className={`flex w-full items-center ${
              isMobile
                ? `justify-start gap-8`
                : `h-20 shrink-0 justify-between gap-4 pt-2 px-1`
            }`}
          >
            <MusicThumbnailAndTitle isMobilePlayer={isMobile} />
            <div
              className={`flex items-center ${
                isMobile
                  ? `gap-3 shrink-0 justify-center`
                  : `gap-8 justify-start`
              }`}
            >
              <MusicControls
                fromMobilePlayer={isMobile}
                currentTime={currentTime}
                duration={duration}
                isPlaying={isPlaying}
                onPlayPause={togglePlay}
                drawerOpen={drawerOpen}
                toggleDrawer={setDrawerOpen}
              />
            </div>
            {!isMobile && (
              <div className="ml-auto pr-5">
                <MusicFavoriteAndShare />
              </div>
            )}
          </div>
          {isExpanded && !isMobile && <ExpandedArea />}
        </div>
        {isMobile && (
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerMusicPlayer
              currentTime={currentTime}
              duration={duration ?? 0}
              togglePlay={togglePlay}
              timelineRef={timelineRef}
              isDragging={isDragging}
              handleMouseDown={handleMouseDown}
              percent={percent}
              progress={progress}
              isPlaying={isPlaying}
            />
          </Drawer>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
