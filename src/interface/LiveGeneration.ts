import { STATUS_TYPE } from "@/enums";
import { GeneratedList } from "./GeneratedItems";

export type statusType =
  | STATUS_TYPE.CONNECTING
  | STATUS_TYPE.STARTING
  | STATUS_TYPE.STARTED
  | STATUS_TYPE.PENDING
  | STATUS_TYPE.GENERATING
  | STATUS_TYPE.COMPLETED
  | STATUS_TYPE.SUCCESS
  | STATUS_TYPE.FAILED;

export interface LiveGenerationStore {
  latestStatusData: GeneratedList[];
  submitPrompt: (prompt: string) => void;
  getStatus: () => void;
  onRehydrateStorage?: (state?: {
    setState: any;
    getState: any;
  }) => ((stateData: any) => void) | void;
}
