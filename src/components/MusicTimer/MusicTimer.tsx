import { formatTime } from "@/common";
import { MusicTimerProps } from "@/interface/Music";
import { cn } from "@/lib/utils";

const MusicTimer = ({ currentTime, duration, className }: MusicTimerProps) => {
  return (
    <span
      className={cn(
        "text-white text-[12px] flex items-center justify-end pt-1",
        className,
      )}
    >
      {formatTime(currentTime)} / {formatTime(duration)}
    </span>
  );
};

export default MusicTimer;
