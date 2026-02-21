import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const MusicFavoriteAndShare = () => {
  return (
    <div className="flex gap-2 w-full items-center justify-center-safe">
      <div className="h-[42px] w-[42px] flex items-center justify-center rounded-full border border-[#ffffff]/5">
        <Heart
          size={16}
          className="text-[#ffffff80] hover:text-white cursor-pointer"
        />
      </div>
      <Button className="h-10 w-[100px] px-4 py-2 border border-[#ffffff1a] rounded-[20px] bg-transparent hover:bg-[#ffffff1a] cursor-pointer">
        Share
      </Button>
    </div>
  );
};

export default MusicFavoriteAndShare;
