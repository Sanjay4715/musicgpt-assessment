import { RenderLyricsProps } from "@/interface/MusicPlayer";

const RenderLyrics = ({ lyrics }: RenderLyricsProps) => {
  // Split by section tags: [Verse 1], [Chorus], etc.
  const parts = lyrics.split(/(\[.*?\])/g); // keep the brackets

  return (
    <div>
      {parts.map((part, index) => {
        if (part.match(/\[.*?\]/)) {
          return (
            <span
              key={index}
              className="font-bold text-[#ffffff80] text-[16px]"
            >
              {part}
            </span>
          );
        }
        return (
          <span
            key={index}
            className="whitespace-pre-line text-[#ffffff80] leading-6"
          >
            {part}
          </span>
        );
      })}
    </div>
  );
};

export default RenderLyrics;
