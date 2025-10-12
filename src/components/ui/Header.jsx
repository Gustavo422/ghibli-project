import Image from "next/image";
import Link from "next/link";
import Profile from "@/components/Profile";
export default function Header() {
  return (
    <header className="fixed z-50 w-full h-22">
      <nav className="bg-slate-950/95 backdrop-blur-sm px-4 lg:px-6 py-2.5">
        <div className="flex items-center justify-between w-full ">
          <div></div>
          <Link href="/" className="w-28 h-16 relative self-center">
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
  );
}
