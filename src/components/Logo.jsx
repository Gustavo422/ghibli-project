import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex h-[50px] items-center justify-center space-x-4">
      <Link
        href="/"
        className="relative h-[46px] w-[88px] transition-all duration-200 hover:scale-105"
      >
        <Image
          src="/jiji-logo_02.png"
          fill
          quality={100}
          priority
          alt="Logo"
          className="drop-shadow-ring object-cover brightness-200"
        />
      </Link>
      {/*<Separator orientation="vertical" className="h-[90%] w-px rounded-lg bg-slate-600">*/}
    </div>
  );
}
