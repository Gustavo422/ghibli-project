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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
export default function Profile({ className }) {
  let { data: session, status } = useSession();

  const image = session?.user?.image;
  const username = session?.user?.name || "User...";
  const name = formattedName(username);
  const fallback = placeholderLetters(username);
  const [open, setOpen] = useState(false);
  return (
    <div className={clsx("relative", className)}>
      <DropdownMenu
        open={open}
        onOpenChange={setOpen}
        delayDuration={200}
        className="bg-black"
      >
        <DropdownMenuTrigger
          asChild
          className="flex items-center justify-center bg-black/5"
        >
          <button
            type="button"
            aria-label="Open profile menu"
            className="relative flex h-9 w-9 items-center justify-center rounded-full p-0"
          >
            <Avatar className="h-full w-full cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:border-[3px] hover:border-double hover:border-blue-500/80">
              <AvatarImage
                alt={`${username} profile picture`}
                src={image}
                className="h-full w-full object-cover"
              />
              <AvatarFallback className="flex h-full w-full items-center justify-center bg-black text-sm">
                {fallback}
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          className="m-0 mt-[18px] mr-16 gap-0 rounded-md border-none bg-transparent p-0"
        >
          <Card className="h-full w-full rounded-md border-2 border-white/80 opacity-85 backdrop-blur-sm">
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
