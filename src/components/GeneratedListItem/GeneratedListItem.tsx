import { GeneratedList } from "@/interface/GeneratedItems";
import InvalidPromptInfo from "../GenerationItem/InvalidPromptInfo/InvalidPromptInfo";
import ServerBusyInfo from "../GenerationItem/ServerBusyInfo/ServerBusyInfo";
import GenerationItem from "../GenerationItem/Item/GenerationItem";
import { STATUS_TYPE } from "@/enums";

const GeneratedListItem = ({ ...generatedItemProps }: GeneratedList) => {
  const { status, error_tag } = generatedItemProps;
  switch (status) {
    case STATUS_TYPE.FAILED:
      if (error_tag === "BAD_REQUEST") {
        return <InvalidPromptInfo {...generatedItemProps} />;
      } else {
        return <ServerBusyInfo {...generatedItemProps} />;
      }
    default:
      return <GenerationItem {...generatedItemProps} />;
  }
};

export default GeneratedListItem;
