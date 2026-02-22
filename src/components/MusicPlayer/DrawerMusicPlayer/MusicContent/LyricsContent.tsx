import { LyricsContentProps } from "@/interface/MusicPlayer";
import { FileMusic, Notebook } from "lucide-react";

const LyricsContent = ({ lyrics, prompt }: LyricsContentProps) => {
  return (
    <div
      data-id="drawer-lyrics-section"
      className="px-4 pb-6 space-y-4 flex flex-col text-[#ffffff80]"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="rounded-[12px] bg-[#ffffff1a] w-8 h-8 flex items-center justify-center">
          <Notebook size={18} />
        </div>
        <div className="font-semibold text-[12px] uppercase">Prompt</div>
      </div>
      <div className="bg-[#1d212599] backdrop-blur-[50px] border-[#1d212599] border rounded-[12px] p-4 mb-2">
        <div className="text-[12px] leading-1.625">{prompt}</div>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <div className="rounded-[12px] bg-[#ffffff1a] w-8 h-8 flex items-center justify-center">
          <FileMusic size={18} />
        </div>
        <div className="font-semibold text-[12px] uppercase">Lyrics</div>
      </div>
      <div className="bg-[#1d212599] backdrop-blur-[50px] border-[#1d212599] border rounded-[12px] p-4 mb-2">
        <div className="text-[12px] leading-1.625">{lyrics}</div>
      </div>
    </div>
  );
};

export default LyricsContent;
