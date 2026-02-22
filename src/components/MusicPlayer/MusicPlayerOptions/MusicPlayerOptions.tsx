import {
  ChevronDown,
  ChevronUp,
  CornerDownRight,
  Ellipsis,
  X,
} from "lucide-react";
import { Button } from "../../ui/button";
import Volume from "../Volume/Volume";
import { MusicPlayerOptionsProps } from "@/interface/Music";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

const MusicPlayerOptions = ({
  isExpanded,
  handleExpanded,
  volume,
  handleVolume,
}: MusicPlayerOptionsProps) => {
  const { toggleMusicPlayer } = useMusicPlayerStore();

  return (
    <div className="absolute -top-4 right-5 z-50">
      <div className="group relative flex items-center gap-1 justify-center">
        <Button className="h-[34px] w-[34px] z-20 border rounded-full bg-[#0a0c0d] border-[#ffffff1a] hover:bg-[#1d2125] cursor-pointer flex items-center justify-center ">
          <Ellipsis size={18} />
        </Button>
        <Button className="h-[34px] w-[34px] z-20 border rounded-full bg-[#0a0c0d] border-[#ffffff1a] hover:bg-[#1d2125] cursor-pointer flex items-center justify-center">
          <CornerDownRight size={18} />
        </Button>
        <Volume volume={volume} handleVolume={handleVolume} />
        {isExpanded ? (
          <Button
            onClick={() => handleExpanded(false)}
            className="h-[34px] w-[34px] z-20 border rounded-full bg-[#0a0c0d] border-[#ffffff1a] hover:bg-[#1d2125] cursor-pointer flex items-center justify-center"
          >
            <ChevronDown size={18} />
          </Button>
        ) : (
          <Button
            onClick={() => handleExpanded(true)}
            className="h-[34px] w-[34px] z-20 border rounded-full bg-[#0a0c0d] border-[#ffffff1a] hover:bg-[#1d2125] cursor-pointer flex items-center justify-center"
          >
            <ChevronUp size={18} />
          </Button>
        )}
        <Button
          className="h-[34px] w-[34px] z-20 border rounded-full bg-[#0a0c0d] border-[#ffffff1a] hover:bg-[#1d2125] cursor-pointer flex items-center justify-center"
          onClick={() => toggleMusicPlayer(false)}
        >
          <X size={18} />
        </Button>
      </div>
    </div>
  );
};

export default MusicPlayerOptions;
