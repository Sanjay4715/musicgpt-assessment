import { ReactNode } from "react";
import Header from "./Header/Header";
import DesktopSidebar from "./Sidebar/DesktopSidebar";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { Toaster } from "sonner";

interface NavLinkProps {
  children: ReactNode;
}

const Navigation: React.FC<NavLinkProps> = ({ children }) => {
  return (
    <section className="flex w-full">
      <DesktopSidebar />
      <main className="relative z-0 ml-0 min-[960px]:ml-(--sidebar-width) flex-1 w-full pt-10 overflow-x-hidden">
        <Header />
        {children}
        <Toaster richColors position="top-center" />
      </main>
      <MusicPlayer />
    </section>
  );
};

export default Navigation;
