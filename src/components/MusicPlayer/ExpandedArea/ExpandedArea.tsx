"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useCallback, useEffect, useRef, useState } from "react";
import CommentItem from "../CommentItem/CommentItem";

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
            nepali sattire
          </div>
          <div className="text-[#777A80]">
            <section>
              <h4>[Intro]</h4>
              <p>
                [Madal drum solo starts with a heavy electronic sub-bass kick]
              </p>
              <p>[Sharp Sarangi melody plays a fast, repetitive hook]</p>
              <p>(हो हो!)</p>
              <p>(हेर मलाई!)</p>
            </section>

            <section>
              <h4>[Verse 1]</h4>
              <p>बजारको नयाँ क्रिम किनेर ल्याएँ</p>
              <p>अनुहारमा बाक्लो लेप मैले दलेँ</p>
              <p>हिजोसम्म त म अलि कालो थिएँ</p>
              <p>आज त म विदेशी जस्तै भएँ</p>
              <p>(को हो यो?)</p>
              <p>पुरानो म त कता हराएछ</p>
              <p>नयाँ यो छालाले सबैलाई जितेछ</p>
            </section>

            <section>
              <h4>[Pre-Chorus]</h4>
              <p>सूर्यको किरण देखि डराउँछु म त</p>
              <p>कालो छाता ओढेर मात्रै हिँड्छु म त</p>
              <p>(सेतो!)</p>
              <p>(एकदम सेतो!)</p>
            </section>

            <section>
              <h4>[Chorus]</h4>
              <p>म त गोरो, म कति राम्रो</p>
              <p>सबैको आँखा अब मतिरै हुन्छ</p>
              <p>कालो छालाको यहाँ कामै छैन</p>
              <p>चम्किलो मेरो यो नयाँ अवतार</p>
              <p>हेर मलाई, म त कति सफा!</p>
              <p>(गो-गो-गोरो!)</p>
            </section>

            <section>
              <h4>[Verse 2]</h4>
              <p>पुरानो संस्कृति र भेष भुलेँ</p>
              <p>विदेशी पाउडरमा म त झुम्मिएँ</p>
              <p>छिमेकीले मलाई चिन्नै छाडे</p>
              <p>नयाँ रुपको अर्कै रवाफ छ यहाँ</p>
              <p>चिउँडो अलि माथि, आँखामा घमण्ड</p>
              <p>बाटोमा हिँड्दा म नै ठालु जस्तो</p>
            </section>

            <section>
              <h4>[Pre-Chorus]</h4>
              <p>सूर्यको किरण देखि डराउँछु म त</p>
              <p>कालो छाता ओढेर मात्रै हिँड्छु म त</p>
              <p>(सेतो!)</p>
              <p>(एकदम सेतो!)</p>
            </section>

            <section>
              <h4>[Chorus]</h4>
              <p>म त गोरो, म कति राम्रो</p>
              <p>सबैको आँखा अब मतिरै हुन्छ</p>
              <p>कालो छालाको यहाँ कामै छैन</p>
              <p>चम्किलो मेरो यो नयाँ अवतार</p>
              <p>हेर मलाई, म त कति सफा!</p>
            </section>

            <section>
              <h4>[Bridge]</h4>
              <p>[The music slows down, heavy bass pulses]</p>
              <p>मन भित्र जस्तो भए नि के भो र?</p>
              <p>बाहिर त टल्किएको हुनुपर्छ</p>
              <p>सक्छौ भने मलाई चिनेर देखाऊ</p>
              <p>यो नक्कली रंगमा म नै हराएँ</p>
              <p>(हराएँ!)</p>
              <p>(म हराएँ!)</p>
              <p>सक्छौ भने अब छोएर देखाऊ</p>
            </section>

            <section>
              <h4>[Chorus]</h4>
              <p>म त गोरो, म कति राम्रो</p>
              <p>सबैको आँखा अब मतिरै हुन्छ</p>
              <p>कालो छालाको यहाँ कामै छैन</p>
              <p>चम्किलो मेरो यो नयाँ अवतार</p>
              <p>हेर मलाई, म त कति सफा!</p>
              <p>(गो-गो-गोरो!)</p>
            </section>

            <section>
              <h4>[Outro]</h4>
              <p>[Madal and Sarangi reach a frantic peak]</p>
              <p>पाउडर</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedArea;
