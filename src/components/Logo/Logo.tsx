import Image from "next/image";

import AppLogo from "@/assets/AppLogo.svg";

const Logo = () => {
  return (
    <a className="block active:scale-95 transition duration-100">
      <span className="flex items-center gap-2.5">
        <span className="h-8 w-8">
          <Image src={AppLogo} alt="App" width={32} height={32} />
        </span>
        <span className="block text-lg font-medium text-white">MusicGPT</span>
      </span>
    </a>
  );
};

export default Logo;
