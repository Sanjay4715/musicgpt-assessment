"use client";
import { useEffect, useRef, useState } from "react";
import MusicControls from "../MusicControls/MusicControls";
import MusicTimeline from "../MusicTimeline/MusicTimeline";
import MusicThumbnailAndTitle from "../MusicThumbnailAndTitle/MusicThumbnailAndTitle";
import MusicFavoriteAndShare from "../MusicfavoriteAndShare/MusicFavoriteAndShare";
import MusicPlayerOptions from "../MusicPlayerOptions/MusicPlayerOptions";
import ExpandedArea from "../ExpandedArea/ExpandedArea";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

const DesktopMusicPlayer = () => {
  const {
    musicToPlay,
    currentTimestamp,
    setCurrentTimestamp,
    setMusicPlayPause,
    isMusicPaused,
  } = useMusicPlayerStore();

  const { file_output_0, audio_length_ms } = musicToPlay;

  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const timelineRef = useRef<HTMLButtonElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [duration, setDuration] = useState<number>(audio_length_ms ?? 0);
  const [currentTime, setCurrentTime] = useState<number>(currentTimestamp ?? 0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);

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

  const handleVolumeChange = (value: number) => {
    const newVolume = Math.min(Math.max(value, 0), 1);
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
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
      className="fixed max-[960px]:hidden bottom-4 left-2 w-full md:left-0 pointer-events-none transition-all duration-300 max-w-[100vw] md:max-w-[calc(100vw-var(--sidebar-width))] md:ml-[var(--sidebar-width)]"
      style={{ zIndex: 70 }}
    >
      <div className="relative mx-auto flex w-[calc(100%-28px)] flex-col items-center md:w-[calc(100%-20px)] md:max-w-[740px] xl:max-w-[900px]">
        <audio ref={audioRef} src={file_output_0} preload="metadata" autoPlay />

        <div
          className={`w-full relative rounded-[24px] transition-all duration-500 ease-in-out bg-white/5 backdrop-blur-xl border border-white/10 pointer-events-auto shadow-2xl ${isExpanded ? "h-[412px]" : "h-[88px]"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MusicTimeline
            timelineRef={timelineRef}
            isDragging={isDragging}
            handleMouseDown={handleMouseDown}
            percent={percent}
            progress={progress}
            currentTime={currentTime}
            duration={duration}
          />

          {isHovered && !isDragging && (
            <MusicPlayerOptions
              isExpanded={isExpanded}
              handleExpanded={setIsExpanded}
              volume={volume}
              handleVolume={handleVolumeChange}
            />
          )}

          <div className="flex h-20 w-full shrink-0 items-center justify-between gap-4 pt-2 px-1">
            <div className="flex items-center justify-start gap-8">
              <MusicThumbnailAndTitle />
              <MusicControls isPlaying={isPlaying} onPlayPause={togglePlay} />
            </div>
            <div className="ml-auto pr-5">
              <MusicFavoriteAndShare />
            </div>
          </div>

          {isExpanded && <ExpandedArea />}
        </div>
      </div>
    </div>
  );
};

export default DesktopMusicPlayer;
