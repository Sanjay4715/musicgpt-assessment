import { STATUS_TYPE } from "@/enums";
import Process from "./Process";
import { GeneratedList } from "@/interface/GeneratedItems";
import GeneratedListItem from "../GeneratedListItem/GeneratedListItem";

const ProcessingGenerationItem = ({ ...genaratedItem }: GeneratedList) => {
  const { status } = genaratedItem;
  return status === STATUS_TYPE.SUCCESS ? (
    <GeneratedListItem {...genaratedItem} />
  ) : (
    <div className="w-full flex flex-col items-start gap-1 rounded-[12px] bg-transparent">
      <Process {...genaratedItem} />
    </div>
  );
};

export default ProcessingGenerationItem;
