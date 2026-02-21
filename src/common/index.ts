export const formatTime = (time: number) => {
  if (!time) return "00:00";
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

export const randomizeArray = <T>(sourceArray: T[]): T[] => {
  return [...sourceArray].sort(() => Math.random() - 0.5);
};
