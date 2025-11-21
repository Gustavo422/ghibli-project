"use client";

import Link from "next/link";

import { Button } from "@/components/ui/Button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import TotoroIcon from "@/components/ui/svg/TotoroIcon";
import {
  FilmIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

export default function HamburguerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover
        open={open}
        onOpenChange={setOpen}
        delayDuration={300}
        className="w-auto p-0"
      >
        <PopoverTrigger
          className="border-accent-foreground flex h-full w-full cursor-pointer items-center justify-center border transition-all duration-200 hover:scale-105 hover:border-slate-600 hover:bg-slate-100/30"
          asChild
        >
          <Button
            type="button"
            variant="ghost"
            className="m-0 h-full w-full p-0 px-1"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XIcon className="m-0 h-8 w-8 p-0" />
            ) : (
              <MenuIcon className="m-0 h-8 w-8 p-0" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="border-ring w-full rounded-md border bg-slate-900/40 backdrop-blur-sm"
          side="bottom"
          align="start"
          style={{ transform: "translateX(-13px) translateY(17px)" }}
        >
          <ul className="grid h-full w-full">
            <li>
              <Link href="/" className="flex items-center justify-center pb-2">
                <div className="flex w-36 items-center justify-start gap-x-2 rounded-md p-2 transition-all duration-200 hover:rounded-lg hover:bg-slate-900">
                  <HomeIcon />
                  Home Page
                </div>
              </Link>

              <Link
                href="/login"
                className="flex items-center justify-center pb-2"
              >
                <div className="flex w-36 items-center justify-start gap-x-2 rounded-md p-2 transition-all duration-200 hover:rounded-lg hover:bg-slate-900">
                  <UserIcon />
                  Login
                </div>
              </Link>
              <Link href="/characters">
                <div className="flex w-36 items-center justify-start gap-x-2 rounded-md p-2 transition-all duration-200 hover:rounded-lg hover:bg-slate-900">
                  <TotoroIcon /> Characters
                </div>
              </Link>
              <Link
                href="/films"
                className="flex items-center justify-center pb-2"
              >
                <div className="flex w-36 items-center justify-start gap-x-2 rounded-md p-2 transition-all duration-200 hover:rounded-lg hover:bg-slate-900">
                  <FilmIcon />
                  Films
                </div>
              </Link>
              <Link href="/search" className="flex items-center justify-center">
                <div className="flex w-36 items-center justify-start gap-x-2 rounded-md p-2 transition-all duration-200 hover:rounded-lg hover:bg-slate-900">
                  <SearchIcon />
                  Search
                </div>
              </Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
}
