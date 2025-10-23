"use client";

import Link from "next/link";

import { Button } from "@/components/ui/Button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { FilmIcon, HomeIcon, MenuIcon, UserIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function HamburguerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen} className="m-0 w-auto p-0">
        <PopoverTrigger
          className="m-0 flex h-full w-full items-center justify-center p-0"
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
          className="w-full rounded-md border-2 border-white/80 opacity-85 backdrop-blur-sm"
          side="bottom"
          align="start"
          style={{ transform: "translateX(-13px)" }}
        >
          <ul className="grid h-full w-full bg-transparent">
            <li>
              <Link href="/" className="flex items-center justify-center pb-2">
                <div className="flex w-36 items-center justify-start gap-x-2 rounded-md p-2 transition-all hover:rounded-lg hover:bg-slate-900">
                  <HomeIcon />
                  Home Page
                </div>
              </Link>

              <Link
                href="/login"
                className="flex items-center justify-center pb-2"
              >
                <div className="flex w-36 items-center justify-start gap-x-2 rounded-md p-2 transition-all hover:rounded-lg hover:bg-slate-900">
                  <UserIcon />
                  Login
                </div>
              </Link>

              <Link href="/films" className="flex items-center justify-center">
                <div className="flex w-36 items-center justify-start gap-x-2 rounded-md p-2 transition-all hover:rounded-lg hover:bg-slate-900">
                  <FilmIcon />
                  Films
                </div>
              </Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
}
