import { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";

interface NavLinkProps {
  children: ReactNode;
}

const Navigation: React.FC<NavLinkProps> = ({ children }) => {
  return (
    <section className="flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </section>
  );
};

export default Navigation;
