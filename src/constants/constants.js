import CreateSong from "@/assets/CreateSong.svg";
import CreateSound from "@/assets/CreateSound.svg";
import SpeakText from "@/assets/SpeakText.svg";
import ChangeFile from "@/assets/ChangeFile.svg";
import Random from "@/assets/Random.svg";
import { alignEnum } from "@/interface/PromptRandomizer";

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
