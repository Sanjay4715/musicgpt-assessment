import { adjectives, nouns } from "@/constants/constants";

export const formatTime = (time: number) => {
  if (!time) return "00:00";
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

export const randomizeArray = <T>(sourceArray: T[]): T[] => {
  return [...sourceArray].sort(() => Math.random() - 0.5);
};

export const getRandomItem = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const generateSongTitle = () =>
  `${getRandomItem(adjectives)} ${getRandomItem(nouns)}`;

export const getVersion = (version_string: string) => {
  return version_string === "Version 1" ? "V1" : "V2";
};

export const sortArrayByCreatedAt = <
  T extends { created_at?: string | number | Date },
>(
  sourceArray: T[],
): T[] => {
  return sourceArray.sort((a, b) => {
    const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
    const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
    return timeB - timeA; // newest first
  });
};
