import CommentItem from "../../CommentItem/CommentItem";

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
  {
    id: 4,
    username: "Yitek82056",
    avatar: "/svg/icon-profile-filled.svg",
    time: "48m ago",
    text: "Very Good",
  },
  {
    id: 5,
    username: "Yitek82056",
    avatar: "/svg/icon-profile-filled.svg",
    time: "48m ago",
    text: "Very Good",
  },
  {
    id: 6,
    username: "Yitek82056",
    avatar: "/svg/icon-profile-filled.svg",
    time: "48m ago",
    text: "Very Good",
  },
];

const CommentContent = () => {
  return (
    <div data-id="drawer-comment-section" className="px-4 pb-6 space-y-4">
      <div className="text-[16px] text-[#ffffff80]">
        Comment disabled for private audio.
      </div>

      <div className="flex flex-col gap-3">
        {sampleComments.map((c, index) => (
          <CommentItem
            key={index}
            username={c.username}
            text={c.text}
            time={c.time}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentContent;
