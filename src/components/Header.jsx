import Profile from "@/components/Profile";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { SidebarTrigger } from "@/components/ui/Sidebar";

export default function Header() {
  return (
    <SessionProvider>
      <header className="fixed top-0 z-50 w-[100%] h-12 ">
        <nav className="bg-slate-950/95 backdrop-blur-sm px-1 lg:px-2.5 py-2.5">
          <div className="flex items-center justify-between w-full ">
            <SidebarTrigger />

            <Link href="/" className="w-28 h-12 relative self-center">
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
        <hr className="border-t border-opacity-85 border-gray-600" />
      </header>
    </SessionProvider>
  );
}
