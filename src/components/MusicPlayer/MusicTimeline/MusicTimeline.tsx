import { MusicTimelineProps } from "@/interface/Music";

const MusicTimeline = ({
  isDrawer = false,
  handleMouseDown,
  isDragging,
  progress,
  percent,
  currentTime,
  duration,
  timelineRef,
}: MusicTimelineProps) => {
  const formatTime = (time: number) => {
    if (!time) return "00:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div
      data-id="music-timeline"
      className={`absolute z-10 ${!isDrawer ? "left-0 top-0 w-[700px] max-[960px]:w-[760px] xl:w-[862px]" : "w-[calc(100%-10px)]"}`}
    >
      <button
        ref={timelineRef}
        type="button"
        aria-label="Audio Player Timeline"
        onMouseDown={handleMouseDown}
        className={`group absolute w-full right-0 cursor-pointer ${isDrawer ? "left-0 h-1" : "left-5 top-[-7.5px] h-4"}`}
      >
        {isDrawer && (
          <span className="absolute inset-0 rounded-full bg-white/10 z-0" />
        )}
        {/* Progress Bar (scaleX controlled) */}
        <span
          className={`absolute origin-left w-full ${
            isDrawer
              ? "inset-0 rounded-full z-20"
              : `left-0 top-1.5 block h-0.5 w-full opacity-100`
          }`}
          style={{
            transform: `scaleX(${progress})`,
            transition: isDragging ? "none" : "transform 0.4s linear",
          }}
        >
          {/* Glow Layers */}
          <div
            className="absolute inset-0 h-full w-full transition-opacity duration-300"
            style={{ opacity: 1 }}
          >
            <span
              className="absolute inset-0 blur-[6px]"
              style={{
                background: isDrawer
                  ? "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgb(255,255,255,1) 100%)"
                  : "linear-gradient(90deg, rgba(255,244,230,0) 0%, rgb(255,244,230) 100%)",
              }}
            />
            <span
              className="absolute inset-0 blur-[4px]"
              style={{
                background: isDrawer
                  ? "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgb(255,255,255,1) 100%)"
                  : "linear-gradient(90deg, rgba(255,244,230,0) 0%, rgb(255,244,230) 100%)",
              }}
            />
          </div>

          {/* Solid Core Line */}
          <span
            className="absolute inset-0 block"
            style={{
              background: isDrawer
                ? "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgb(255,255,255,1) 100%)"
                : "linear-gradient(90deg, rgba(255,244,230,0) 0%, rgb(255,244,230) 100%)",
            }}
          />
        </span>

        {/* Knob + Time */}
        <div
          className={`pointer-events-none absolute left-0 w-full will-change-transform ${isDrawer ? "top-0" : "top-1.5"}`}
          style={{
            transform: `translateX(${percent}%)`,
            transition: isDragging ? "none" : "transform 0.4s linear",
          }}
        >
          <div className="relative">
            {/* Time Label */}
            <span className="absolute bottom-4 left-0 flex -translate-x-1/2 items-center justify-center whitespace-nowrap text-[10px] font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Knob Dot */}
            <span className="absolute -top-1 left-0 block h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#fff4e6] shadow-[0_0_8px_rgba(255,244,230,0.8)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default MusicTimeline;
