import { Settings } from "lucide-react";
import Profile from "../../Profile/Profile";

const ProfileInfo = () => {
  return (
    <div data-id="profile-info" className="flex flex-row text-[#777A80]">
      <div className="flex flex-row gap-3 items-center w-full">
        <Profile badge={false} isFromProfilePopover={true} />
        <div className="flex flex-col">
          <span className="text-[#E4E6E8] font-medium text-[16px]">
            Full Name
          </span>
          <span>@username</span>
        </div>
        <div className="ml-auto">
          <Settings size={24} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
