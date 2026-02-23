import { STATUS_TYPE } from "@/enums";
import Process from "./Process";
import { GeneratedList } from "@/interface/GeneratedItems";
import GeneratedListItem from "../GeneratedListItem/GeneratedListItem";
import InvalidPromptInfo from "./InvalidPromptInfo/InvalidPromptInfo";
import ServerBusyInfo from "./ServerBusyInfo/ServerBusyInfo";

const ProcessingGenerationItem = ({ ...genaratedItem }: GeneratedList) => {
  const { status, error_tag } = genaratedItem;

  switch (status) {
    case STATUS_TYPE.FAILED:
      if (error_tag === "BAD_REQUEST") {
        return <InvalidPromptInfo {...genaratedItem} />;
      } else {
        return <ServerBusyInfo {...genaratedItem} />;
      }
    case STATUS_TYPE.SUCCESS:
      return <GeneratedListItem {...genaratedItem} />;
    default:
      return (
        <div className="w-full flex flex-col items-start gap-1 rounded-[12px] bg-transparent">
          <Process {...genaratedItem} />
        </div>
      );
  }
};

export default ProcessingGenerationItem;
