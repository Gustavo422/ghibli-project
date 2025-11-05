"use client";

import clsx from "clsx";
import { CircleXIcon, LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

import { formattedName, placeholderLetters } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
export default function Profile({ className }) {
  let { data: session, status } = useSession();

  const image = session?.user?.image;
  const username = session?.user?.name || "User...";
  const name = formattedName(username);
  const fallback = placeholderLetters(username);
  const [open, setOpen] = useState(false);
  return (
    <div className={clsx("relative", className)}>
      <Popover
        open={open}
        onOpenChange={setOpen}
        delayDuration={200}
        className="bg-black"
      >
        <PopoverTrigger asChild className="flex items-center justify-center">
          <button
            type="button"
            aria-label="Open profile menu"
            className="relative flex aspect-square h-10 items-center justify-center rounded-full p-0"
          >
            <Avatar className="h-full w-full cursor-pointer border-[3px] border-double border-white/30 transition-all duration-200 ease-out hover:scale-110 hover:border-blue-500/80">
              <AvatarImage
                alt={`${username} profile picture`}
                src={image}
                className="h-full w-full object-cover"
              />
              <AvatarFallback className="flex h-full w-full items-center justify-center bg-black/30 text-sm">
                {fallback}
              </AvatarFallback>
            </Avatar>
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="center"
          className="m-0 mt-[18px] mr-16 gap-0 rounded-md border-none p-0"
        >
          <Card className="h-full w-full rounded-md border border-white/80">
            <CardHeader>
              <CardTitle className="text-center text-lg">{name}</CardTitle>
              <CardDescription className="text-center text-sm">
                <p className="text-slate-400">You want to Login Out?</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-start gap-2">
              <Button
                className="flex items-center gap-2 px-3 py-2 text-[15px]"
                onClick={() => signOut()}
                variant="destructive"
                type="button"
              >
                <LogOutIcon className="h-4 w-4 stroke-current" />
                <p className="">Log Out</p>
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="ghost"
                className="flex items-center gap-2 border border-white p-3 px-3 py-2 text-[15px]"
                type="button"
              >
                <CircleXIcon className="text-current" strokeWidth={2} /> Cancel
              </Button>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
