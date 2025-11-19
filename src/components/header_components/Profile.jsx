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
      <Popover open={open} onOpenChange={setOpen} delayDuration={300}>
        <PopoverTrigger asChild className="flex items-center justify-center">
          <button
            type="button"
            aria-label="Open profile menu"
            className="relative flex aspect-square h-10 items-center justify-center rounded-full p-0"
          >
            <Avatar className="border-accent-foreground h-full w-full cursor-pointer border-[3px] border-double transition-all duration-200 ease-out hover:scale-110 hover:border-blue-500/80">
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
          <Card className="border-ring h-full w-full rounded-md border bg-transparent backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-lg">{name}</CardTitle>
              <CardDescription className="text-center text-sm">
                <p className="text-ring">You want to Login Out?</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center gap-2">
              <Button
                className="border-ring flex cursor-pointer items-center gap-x-2 border bg-red-700 px-3 py-2 text-[15px] transition-all duration-300 ease-out hover:scale-105 hover:bg-red-800"
                onClick={() => signOut()}
                type="button"
              >
                <LogOutIcon className="h-4 w-4 stroke-current" />
                <p className="">Log Out</p>
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="ghost"
                className="border-ring flex cursor-pointer items-center gap-x-2 border px-3 py-2 text-[15px] transition-transform duration-300 ease-out hover:scale-105"
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
