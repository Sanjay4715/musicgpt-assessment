import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { musicPlayerTabOptions } from "@/constants/constants";
import LyricsContent from "./MusicContent/LyricsContent";
import CommentContent from "./MusicContent/CommentContent";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

const DrawerMusicContent = () => {
  const { musicToPlay } = useMusicPlayerStore();

  const { input_prompt, lyrics_output } = musicToPlay;

  return (
    <div data-id="drawer-music-content" className="px-4 pb-5">
      <div className="w-full mb-5 px-3">
        <Tabs defaultValue="lyrics" className="w-full">
          <TabsList className="w-full flex bg-transparent p-1 rounded-lg outlline-none">
            {musicPlayerTabOptions.map((option, index) => (
              <TabsTrigger
                key={index}
                value={option.value}
                className="[flex-1 data-[state=active]:bg-[#ffffff1a] px-4 py-2.5 rounded-[10px] text-[14px] data-[state=active]:text-[#ffffff] font-semibold h-10.25 text-[#ffffff80] hover:bg-[#ffffff1a] hover:text-[#ffffff] cursor-pointer"
              >
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent
            value="lyrics"
            className="mt-4 flex-1 overflow-y-auto custom-scrollbar max-h-[260px]"
          >
            <LyricsContent
              lyrics={lyrics_output ?? ""}
              prompt={input_prompt ?? ""}
            />
          </TabsContent>
          <TabsContent
            value="comments"
            className="mt-4 flex-1 overflow-y-auto custom-scrollbar max-h-[260px]"
          >
            <CommentContent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DrawerMusicContent;
