import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CommentProps } from "@/interface/Comment";
import { Ellipsis, SquarePen, Trash } from "lucide-react";

const CommentItem = ({ username, time, text }: CommentProps) => {
  return (
    <div className="flex items-start gap-4 p-3 rounded-[20px] hover:bg-white/5 transition">
      <Avatar className="w-[40px] h-[40px]">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>

      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm text-white truncate">
            {username}
          </span>
          <span className="text-[14px] text-[#ffffff80] font-normal">
            {time}
          </span>
        </div>

        <div className="text-sm text-white break-words whitespace-pre-wrap">
          {text}
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="cursor-pointer text-white items-center ml-auto"
        >
          <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[214px] rounded-[20px] border border-[#262626] bg-[#262626] z-200">
          <div className="flex flex-row gap-2 px-2.5 py-1.25 items-center text-white text-[14px]">
            <SquarePen size={16} />
            <span>Edit</span>
          </div>
          <div className="flex flex-row gap-2 px-2.5 py-1.25 items-center text-red-500 text-[14px]">
            <Trash size={16} />
            <span>Delete</span>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CommentItem;
