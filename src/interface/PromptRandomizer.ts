import { CategorizedPrompt } from "./PresetPrompts";

export enum alignEnum {
  START = "start",
  CENTER = "center",
  END = "end",
}

export interface OptionItemProps {
  label: string;
  icon: string;
  align: alignEnum;
}

export interface PromptRamdomizerProps {
  setPrompt: (value: string) => void;
}

export interface PromptOptionItemProps extends PromptRamdomizerProps {
  option: OptionItemProps;
  handleOptionPromts: (value: string) => CategorizedPrompt[];
}
