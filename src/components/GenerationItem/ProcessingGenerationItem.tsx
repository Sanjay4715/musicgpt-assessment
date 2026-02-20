"use client";

import { useEffect, useState } from "react";
import Process from "./Process";

type Generation = {
  id: string;
  title: string;
  progress: number;
  version: string;
};

const generations: Generation[] = [
  {
    id: "1",
    title: "Nepali satire song of office",
    progress: 11,
    version: "v1",
  },
  {
    id: "2",
    title: "Nepali satire song of office",
    progress: 68,
    version: "v2",
  },
];

const ProcessingGenerationItem = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev: number) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 80); // speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-start gap-1 rounded-[12px] bg-transparent">
      {generations.map((item) => (
        <Process key={item.id} {...item} progress={progress} />
      ))}
    </div>
  );
};

export default ProcessingGenerationItem;
