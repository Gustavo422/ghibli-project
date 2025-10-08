import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed z-50 w-full h-22">
      <nav className="bg-slate-950/95 backdrop-blur-sm px-4 lg:px-6 py-2.5">
        <div className="grid items-center justify-center mx-auto max-w-screen-xl">
          <Link href="/" className="w-28 h-16 relative col-span-3">
            <Image
              src="/jiji-logo.png"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
              className="absolute col-span-3 invert-"
            />
          </Link>
        </div>
      </nav>
      <hr className="border-t border-opacity-85 border-gray-600" />
    </header>
  );
}
