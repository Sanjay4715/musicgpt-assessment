import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";
import { useEffect, useState } from "react";

interface Lyrics {
  start: number;
  end: number;
  text: string;
  index: number;
}

const RenderLyrics = ({ lyrics }: { lyrics: string }) => {
  const { currentTimestamp, musicToPlay } = useMusicPlayerStore();
  const lyricsArray: Lyrics[] = JSON.parse(
    musicToPlay?.lyrics_output_timestamped ?? "[]",
  );

  const [currentLine, setCurrentLine] = useState<Lyrics>();

  useEffect(() => {
    const currentMs = currentTimestamp * 1000; // convert seconds → ms
    if (musicToPlay?.lyrics_output_timestamped) {
      // Parse the string into an array

      if (lyricsArray.length > 0) {
        const line = lyricsArray.find(
          (l: Lyrics) => currentMs >= l.start && currentMs <= l.end,
        );

        setCurrentLine(line); // update state
      }
    }
  }, [currentTimestamp, musicToPlay]);

  if (!lyrics) return null;

  return lyricsArray.map((lryic) => (
    <div
      key={lryic.index}
      className={`whitespace-pre-line leading-6 ${lryic.text === currentLine?.text ? "text-[#ffffff]" : "text-[#ffffff80]"}`}
    >
      {lryic.text}
    </div>
  ));
};

export default RenderLyrics;
