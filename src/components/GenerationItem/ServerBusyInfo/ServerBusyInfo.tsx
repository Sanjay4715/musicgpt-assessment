import { GeneratedList } from "@/interface/GeneratedItems";
import { useLiveGenerationStore } from "@/store/useLiveGenerationStore";
import { TriangleAlert } from "lucide-react";

const ServerBusyInfo = ({ ...generatedItemProps }: GeneratedList) => {
  const { submitPrompt } = useLiveGenerationStore();

  return (
    <div
      data-id="error-server"
      className="flex flex-col gap-1 p-4 rounded-[12px] bg-[#EE0D3714]"
    >
      <span className="flex flex-row gap-1.5 text-[#EE0D37] items-center">
        <TriangleAlert size={20} />
        <span>{generatedItemProps.error_message}</span>
      </span>
      <span className="flex gap-1 text-[14px] text-[#BFC2C8]">
        <span>{generatedItemProps.error_message_detail}</span>
        <span
          className="cursor-pointer underline"
          onClick={() =>
            submitPrompt(
              generatedItemProps.input_prompt ?? "default",
              generatedItemProps.id,
            )
          }
        >
          Retry
        </span>
      </span>
    </div>
  );
};
export default ServerBusyInfo;
