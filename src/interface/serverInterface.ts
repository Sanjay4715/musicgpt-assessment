import { GeneratedList } from "./GeneratedItems";
import { statusType } from "./LiveGeneration";

export interface GeneratedListFromServer extends GeneratedList {
  status?: statusType;
  progress?: number;
}
