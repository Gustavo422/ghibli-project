"use client";

import clsx from "clsx";
import { CircleX, LogOut } from "lucide-react";
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
export default function Profile() {
  let { data: session, status } = useSession();

  const image = session?.user?.image;
  const username = session?.user?.name || "User...";
  const name = formattedName(username);
  const fallback = placeholderLetters(username);
  const [open, setOpen] = useState(false);

  // Avatar style groups
  const baseAvatarClasses = [
    "w-full h-full ",
    "bg-white text-slate-950",
    "text-sm sm:text-base md:text-lg font-bold antialiased",
    "outline outline-4",
    "transition-all duration-150",
  ];
  const hoverAvatarClasses = ["hover:outline-blue-800", "hover:outline-double"];
  const activeAvatarClasses = ["outline-blue-800", "outline-double"];

  return (
    <div className="h-8 w-8">
      <DropdownMenu
        open={open}
        onOpenChange={setOpen}
        delayDuration={200}
        className="p-0"
      >
        <DropdownMenuTrigger asChild>
          <Avatar
            className={clsx(
              baseAvatarClasses,
              open
                ? activeAvatarClasses
                : ["outline-transparent", hoverAvatarClasses],
            )}
          >
            <AvatarImage src={image} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          className="border border-transparent bg-transparent p-0"
        >
          <Card className="mt-[5px] w-full rounded-lg rounded-l-none rounded-t-none border-gray-600 border-l-transparent border-opacity-85 bg-slate-950 bg-slate-950/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-lg">{name}</CardTitle>
              <CardDescription className="text-center text-sm">
                You want to Login Out?
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-start gap-2">
              <Button
                className="w-30 flex justify-start p-3 text-[15px]"
                onClick={() => signOut()}
                variant="destructive"
                type="button"
              >
                <LogOut /> Log Out
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="ghost"
                className="w-30 flex justify-start border-2 border-white p-3 text-[15px]"
                type="button"
              >
                <CircleX className="text-white" /> Cancel
              </Button>
            </CardContent>
          </Card>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
