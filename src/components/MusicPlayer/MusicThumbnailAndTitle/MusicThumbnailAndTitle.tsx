import Image from "next/image";
import { useRef, useState } from "react";

import AppLogo from "@/assets/AppLogo.svg";
import { Edit2Icon } from "lucide-react";
import { Input } from "../../ui/input";
import { MusicThumbailAndTitleProps } from "@/interface/Music";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

const MusicThumbnailAndTitle = ({
  isMobilePlayer = false,
}: MusicThumbailAndTitleProps) => {
  const { musicToPlay } = useMusicPlayerStore();

  const { title, image_custom_thumbnail } = musicToPlay;

  const [value, setValue] = useState(title ?? "");
  const [error, setError] = useState(false);
  const [isHoveredOnImage, setIsHoveredOnImage] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      data-id="thumbnail-title"
      className={`flex h-full ${isMobilePlayer ? "w-full" : "w-[320px]"} items-center gap-3`}
    >
      <div
        data-id="image"
        className={`group flex h-20 max-[960px]:h-12 w-20 max-[960px]:w-12 items-center justify-center ${!isMobilePlayer ? "cursor-pointer" : ""}`}
        onMouseEnter={() => setIsHoveredOnImage(true)}
        onMouseLeave={() => setIsHoveredOnImage(false)}
      >
        <div
          className={`group relative h-20 w-20 ${isMobilePlayer ? "rounded-[10px]" : "rounded-[16px]"} flex items-center`}
        >
          <Image
            src={
              error || !image_custom_thumbnail
                ? AppLogo
                : image_custom_thumbnail
            }
            alt="mobile-thumbnail"
            width={80}
            height={80}
            className={`object-cover ${isMobilePlayer ? "rounded-[10px]" : "rounded-[16px]"}`}
            onError={() => {
              setError(true);
            }}
          />
          {!isMobilePlayer && isHoveredOnImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 opacity-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-[20px] rounded-[16px]">
                <Edit2Icon size={20} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        data-id="title"
        className={`${isMobilePlayer ? "w-full" : "w-[299px]"} flex flex-col gap-1`}
      >
        {isMobilePlayer ? (
          <div className="truncate text-[14px] font-medium leading-tight text-white">
            {title}
          </div>
        ) : (
          <Input
            ref={inputRef}
            minLength={1}
            maxLength={100}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={(e) => {
              // Move cursor to the end
              const target = e.currentTarget as HTMLInputElement;
              requestAnimationFrame(() => {
                // Move cursor to the end
                target.selectionStart = target.selectionEnd =
                  target.value.length;

                // Scroll to the end
                target.scrollLeft = target.scrollWidth;
              });
            }}
            className="-mx-0.75 px-0.5 py-0 h-6.75 w-57 text-[18px]! text-[#ffffff] rounded-[5px] border-transparent hover:border-[#262626] focus-visible:border-[#262626] ring-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none resize-none bg-transparent"
          />
        )}
        {isMobilePlayer ? (
          <div className="text-[16px] truncate leading-normal text-white/70">
            @username
          </div>
        ) : (
          <div
            data-name="AudioCardSubtitle"
            className="flex text-[16px] leading-normal text-[#ffffff80]"
          >
            username
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicThumbnailAndTitle;
