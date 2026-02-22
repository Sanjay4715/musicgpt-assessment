"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import DesktopSidebar from "@/components/Sidebar/DesktopSidebar";
import Header from "@/components/Header/Header";
import { Toaster } from "sonner";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import { useMusicPlayerStore } from "@/store/useMusicPlayerStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isPlayerOn } = useMusicPlayerStore();
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full bg-[#0A0C0D]`}>
        <section className="flex w-full">
          <DesktopSidebar />
          <main className="relative z-0 ml-0 min-[960px]:ml-(--sidebar-width) flex-1 w-full pt-10 overflow-x-hidden">
            <Header />
            {children}
            <Toaster richColors position="top-center" />
          </main>
          {isPlayerOn && <MusicPlayer />}
        </section>
      </body>
    </html>
  );
}
