import { TriangleAlert } from "lucide-react";

const ServerBusyInfo = () => {
  return (
    <div
      data-id="error-server"
      className="flex flex-col gap-1 p-4 rounded-[12px] bg-[#EE0D3714]"
    >
      <span className="flex flex-row gap-1.5 text-[#EE0D37] items-center">
        <TriangleAlert size={20} />
        <span>Oops! Server busy</span>
      </span>
      <span className="text-[14px] text-[#BFC2C8]">
        4.9K users in the queue. <u>Retry</u>
      </span>
    </div>
  );
};
export default ServerBusyInfo;
