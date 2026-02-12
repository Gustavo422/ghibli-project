import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { ArrowUpRightIcon, FilmIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home Page",
  description: `Jiji's House Home Page`,
};

export default function Home() {
  return (
    <div className="h-full w-full font-sans">
      <main className="flex flex-col items-center justify-center gap-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-4 sm:px-0">
          <div className="mt-6 flex w-full flex-col gap-y-5">
            <div className="flex flex-col items-center justify-center gap-y-3 px-6 md:gap-y-5">
              <h1 className="text-accent text-center text-2xl font-bold font-stretch-expanded md:text-4xl">
                The home for Studio Ghibli fans
              </h1>
              <h6 className="max-w-xl text-center text-base">
                Discover films, characters, producers, directors, and much more.
              </h6>
            </div>
            <div className="flex items-center justify-center gap-x-5">
              <Link href="/login">
                <Button
                  className="bg-accent-foreground h-11 w-fit cursor-pointer rounded-full p-0 py-1 pr-1 transition-transform duration-300 ease-out hover:scale-105"
                  type="button"
                  variant="default"
                >
                  <p className="ml-3 text-sm font-normal">Sign In</p>
                  <div className="flex aspect-square h-full w-fit items-center justify-center rounded-full bg-slate-950 p-2">
                    <ArrowUpRightIcon className="text-accent h-4 w-4 rounded-full" />
                  </div>
                </Button>
              </Link>
              <Link href="/films">
                <Button
                  className="bg-accent h-11 w-fit cursor-pointer rounded-full p-0 py-1 pr-1 transition-transform duration-300 ease-out hover:scale-105"
                  type="button"
                  size="icon-sm"
                  variant="secondary"
                >
                  <p className="text-accent-foreground ml-3 text-sm font-normal">
                    Go to the Films
                  </p>
                  <div className="bg-accent-foreground flex aspect-square h-full w-fit items-center justify-center rounded-full">
                    <FilmIcon className="text-accent h-4 w-4 rounded-full" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex max-w-2xl flex-col flex-wrap items-center justify-center gap-2">
            <div className="relative aspect-video h-auto w-full">
              <Image
                src="/homepagebg.png"
                alt="Main Image"
                width={1440}
                height={810}
                quality={50}
                className="absolute rounded-md object-contain"
              />
            </div>
            <div className="my-3 flex h-8 w-full flex-wrap items-center justify-center gap-x-3 md:flex-nowrap md:justify-between">
              <div className="flex h-full items-center justify-center gap-x-3">
                <div className="flex h-full -space-x-2">
                  <Avatar className="aspect-square h-full w-auto">
                    <AvatarImage src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="aspect-square h-full w-auto">
                    <AvatarImage src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar className="aspect-square h-full w-auto">
                    <AvatarImage src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-ring text-sm">21+ Studio Ghibli movies.</p>
              </div>
              <Separator
                orientation="vertical"
                className="bg-accent-foreground"
              />
              <div className="text-ring mt-2 flex items-center justify-center gap-x-2 text-sm sm:mt-0">
                <p>Find information about Studio Ghibli</p>
                <Link href="/films">
                  <Button
                    type="secondary"
                    className="bg-accent-foreground/15 hover:bg-accent-foreground/50 cursor-pointer rounded-full p-1 font-normal"
                  >
                    <p className="text-ring pr-px pl-2">Visit the Films page</p>{" "}
                    <div className="bg-accent-foreground rounded-full p-1.5">
                      <FilmIcon className="m-0 h-5 p-0" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
