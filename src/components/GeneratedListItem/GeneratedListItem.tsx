import { GeneratedList } from "@/interface/GeneratedItems";
import InvalidPromptInfo from "../GenerationItem/InvalidPromptInfo/InvalidPromptInfo";
import ServerBusyInfo from "../GenerationItem/ServerBusyInfo/ServerBusyInfo";
import GenerationItem from "../GenerationItem/GenerationItem";

const GeneratedListItem = ({ ...generatedItemProps }: GeneratedList) => {
  const { status, error_tag } = generatedItemProps;
  console.log("ayop?");
  switch (status) {
    case "FAILED":
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
