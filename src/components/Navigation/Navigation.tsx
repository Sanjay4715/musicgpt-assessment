import { ReactNode } from "react";
import Header from "./Header/Header";
import DesktopSidebar from "./Sidebar/DesktopSidebar";

interface NavLinkProps {
  children: ReactNode;
}

const Navigation: React.FC<NavLinkProps> = ({ children }) => {
  return (
    <section className="flex">
      <DesktopSidebar />
      <main className="flex-1 pt-10 pl-50 max-[960px]:pl-0">
        <Header />
        {children}
      </main>
    </section>
  );
};

export default Navigation;
