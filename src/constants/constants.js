import CreateSong from "@/assets/CreateSong.svg";
import CreateSound from "@/assets/CreateSound.svg";
import SpeakText from "@/assets/SpeakText.svg";
import ChangeFile from "@/assets/ChangeFile.svg";
import Random from "@/assets/Random.svg";
import { alignEnum } from "@/interface/PromptRandomizer";
import { STATUS_TYPE } from "@/enums";

export const labelProcessing = [
  {
    start: 0,
    end: 7,
    label: "Starting AI audio engine",
  },
  {
    start: 8,
    end: 19,
    label: "Analyzing input & calibrating",
  },
  {
    start: 20,
    end: 79,
    label: "Analyzing input & calibrating",
  },
  {
    start: 80,
    end: 94,
    label: "Enhancing with AI magic",
  },
  {
    start: 95,
    end: 96,
    label: "Refining audio dynamics",
  },
  {
    start: 97,
    end: 98,
    label: "Polishing tonal balance",
  },
  {
    start: 99,
    end: 99,
    label: "Finishing up",
  },
];

export const musicPlayerTabOptions = [
  { label: "Lyrics", value: "lyrics" },
  { label: "Comments", value: "comments" },
];

export const promptRandomOptions = [
  { label: "Create Song", icon: CreateSong, align: alignEnum.START },
  { label: "Create Sound", icon: CreateSound, align: alignEnum.CENTER },
  { label: "Speak Text", icon: SpeakText, align: alignEnum.CENTER },
  { label: "Change File", icon: ChangeFile, align: alignEnum.CENTER },
  { label: "Random", icon: Random, align: alignEnum.END },
];

export const adjectives = [
  "Lonely",
  "Midnight",
  "Golden",
  "Broken",
  "Electric",
  "Silent",
  "Wild",
  "Neon",
  "Burning",
  "Fading",
];

export const nouns = [
  "Dreams",
  "Heart",
  "Sky",
  "Echo",
  "Fire",
  "Shadows",
  "River",
  "Stars",
  "Waves",
  "Memory",
];

export const versions = ["Version 1", "Version 2"];

export const statusAndProgress = [
  {
    status: STATUS_TYPE.CONNECTING,
    progress: [0],
  },
  { status: STATUS_TYPE.STARTING, progress: [1, 3] },
  { status: STATUS_TYPE.STARTED, progress: [4, 19] },
  { status: STATUS_TYPE.GENERATING, progress: [20, 95] },
  { status: STATUS_TYPE.PENDING, progress: [96, 97] },
  { status: STATUS_TYPE.COMPLETED, progress: [98, 99] },
  { status: STATUS_TYPE.SUCCESS, progress: [100] },
];
