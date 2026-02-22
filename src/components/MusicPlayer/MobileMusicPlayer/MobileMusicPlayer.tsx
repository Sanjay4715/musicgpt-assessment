"use client";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

import MusicTimeline from "../MusicTimeline/MusicTimeline";
import { useEffect, useRef, useState } from "react";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import MobilePlayer from "./MobilePlayer";
import DrawerMusicPlayer from "../DrawerMusicPlayer/DrawerMusicPlayer";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

const MobileMusicPlayer = () => {
  const {
    musicToPlay,
    currentTimestamp,
    setCurrentTimestamp,
    toggleMusicPlayer,
    setMusicPlayPause,
    isMusicPaused,
  } = useMusicPlayerStore();
  const { audio_length_ms, file_output_0 } = musicToPlay;
  const [isPlaying, setIsPlaying] = useState(false);

  const timelineRef = useRef<HTMLButtonElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [duration, setDuration] = useState(audio_length_ms);
  const [currentTime, setCurrentTime] = useState(currentTimestamp);
  const [isDragging, setIsDragging] = useState(false);

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
  }, [isDragging]);

  // Timeline seek
  const seek = (clientX: number) => {
    if (!timelineRef.current || !audioRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const percent = Math.min(
      Math.max((clientX - rect.left) / rect.width, 0),
      1,
    );
    const newTime = percent * (duration ?? 0);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setCurrentTimestamp(newTime);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    seek(e.clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) seek(e.clientX);
    };
    const onMouseUp = () => setIsDragging(false);

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

  return (
    <div
      data-id="mobile-music-player"
      className="fixed min-[960px]:hidden w-full z-30 bottom-5 px-2"
    >
      <div className="flex flex-col items-center bg-[#1d212599] backdrop-blur-[50px] rounded-lg w-full border border-[#ffffff1a] hover:bg-[#ffffff1a] cursor-pointer">
        <div className="absolute -top-3 right-[-2] z-80">
          <Button
            className="w-[24px] h-[24px] rounded-full bg-[#0000001a] border border-[#ffffff1a] text-white hover:bg-[ffffff1a] cursor-pointer"
            onClick={() => toggleMusicPlayer(false)}
          >
            <X />
          </Button>
        </div>

        <audio ref={audioRef} src={file_output_0} preload="metadata" />

        {/* Timeline */}
        <MusicTimeline
          timelineRef={timelineRef}
          isDragging={isDragging}
          handleMouseDown={handleMouseDown}
          percent={percent}
          progress={progress}
          currentTime={currentTime}
          duration={duration ?? 0}
        />

        <Drawer>
          <DrawerTrigger asChild>
            <span className="w-full">
              <MobilePlayer
                currentTime={currentTime}
                duration={duration ?? 0}
                isPlaying={isPlaying}
                togglePlay={togglePlay}
              />
            </span>
          </DrawerTrigger>
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
      </div>
    </div>
  );
};

export default MobileMusicPlayer;
