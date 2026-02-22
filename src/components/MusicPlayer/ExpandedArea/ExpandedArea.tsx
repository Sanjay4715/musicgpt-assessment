"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useCallback, useEffect, useRef, useState } from "react";
import CommentItem from "../CommentItem/CommentItem";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

interface Comment {
  id: number;
  username: string;
  avatar: string;
  time: string;
  text: string;
}

const sampleComments: Comment[] = [
  {
    id: 1,
    username: "Yitek82056",
    avatar: "/svg/icon-profile-filled.svg",
    time: "48m ago",
    text: "asdasd",
  },
  {
    id: 2,
    username: "Yitek82056",
    avatar: "/svg/icon-profile-filled.svg",
    time: "48m ago",
    text: "asd",
  },
  {
    id: 3,
    username: "Yitek82056",
    avatar: "/svg/icon-profile-filled.svg",
    time: "48m ago",
    text: "Very Good",
  },
];

const ExpandedArea = () => {
  const { musicToPlay } = useMusicPlayerStore();
  const { title, lyrics_output } = musicToPlay;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [commentValue, setCommentValue] = useState("");

  // Resize logic
  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;

    const min = 64;
    const max = 88;

    el.style.height = "auto";
    el.style.height = Math.min(Math.max(el.scrollHeight, min), max) + "px";
  }, []);

  useEffect(() => resizeTextarea(), [resizeTextarea]);

  return (
    <div className="flex flex-row gap-3 pt-5 h-[324px] w-full border-t border-white/5 border-t-0">
      {/* LEFT SIDE: Comment Input */}
      <div className="flex flex-col overflow-hidden min-[1199px]:w-[420px] w-[300px] pl-[4px]">
        <div className="flex items-center gap-2 mb-2 p-[12px]">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div
            className={`flex gap-4 px-3 items-center border border-transparent hover:border-[#262626] rounded-3xl min-[1199px]:w-[342px] w-[200px]`}
          >
            <Textarea
              ref={textareaRef}
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              onInput={resizeTextarea}
              minLength={1}
              maxLength={300}
              placeholder="Add your comment"
              className="w-30 py-2 px-0 min-[1199px]:w-[257px] min-[1199px]:h-10 overflow-y-auto hide-scrollbar text-[#ffffff] border-0 resize-none focus-visible:border-[#262626] ring-0 focus:ring-0 focus-visible:ring-0 outline-none shadow-none bg-transparent"
            />
            {commentValue.trim().length > 0 && (
              <button
                onClick={() => console.log("success")}
                className="p-2 w-12 h-6 flex items-center bg-white text-black rounded-full"
              >
                Post
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 overflow-auto pr-2 custom-scrollbar">
          {sampleComments.map((c, index) => (
            <CommentItem
              key={index}
              text={c.text}
              time={c.time}
              username={c.username}
            />
          ))}
        </div>
      </div>

      <Separator
        orientation="vertical"
        className="h-[290px]! w-[1px]! bg-[#262626]"
      />

      <div className="shrink-0 flex-1 overflow-y-auto custom-scrollbar">
        <div className="ml-5 text-white overflow-y-auto">
          <div className="text-white no-scrollbar line-clamp-6 mt-3 mb-5">
            {title}
          </div>
          <div className="text-[#777A80]">{lyrics_output}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedArea;
