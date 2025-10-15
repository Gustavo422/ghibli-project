import Profile from "@/components/Profile";
import { SidebarTrigger } from "@/components/ui/Sidebar";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header({}) {
  return (
    <SessionProvider>
      <header className="fixed top-0 z-50 h-12 w-[100%]">
        <nav className="bg-slate-950/95 px-1 py-2.5 backdrop-blur-sm lg:px-2.5">
          <div className="flex w-full items-center justify-between">
            <SidebarTrigger />

            <Link href="/" className="relative h-12 w-28 self-center">
              <Image
                src="/jiji-logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
                className="absolute"
              />
            </Link>
            <Profile />
          </div>
        </nav>
        <hr className="border-t border-gray-600 border-opacity-85" />
      </header>
    </SessionProvider>
  );
}
