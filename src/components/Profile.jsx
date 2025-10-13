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
  const { data: session } = useSession();

  const image = session?.user?.image;
  const username = session?.user?.name || "";
  const name = formattedName(username);
  const fallback = placeholderLetters(username);

  const [open, setOpen] = useState(false);

  // Avatar style groups
  const baseAvatarClasses = [
    "w-full h-full",
    "bg-white text-slate-950",
    "text-lg sm:text-xl md:text-2xl font-bold antialiased",
    "outline outline-4",
    "transition-all duration-150",
  ];
  const hoverAvatarClasses = ["hover:outline-blue-600", "hover:outline-double"];
  const activeAvatarClasses = ["outline-blue-600", "outline-double"];

  return (
    <div className="w-12 h-12">
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
          className="bg-transparent border border-transparent p-0"
        >
          <Card className="w-full bg-slate-950 rounded-lg mt-[5px] rounded-t-none rounded-l-none border-opacity-85 border-gray-600 bg-slate-950/95 backdrop-blur-sm border-l-transparent">
            <CardHeader>
              <CardTitle className="text-center text-lg">{name}</CardTitle>
              <CardDescription className="text-center text-sm">
                You want to Login Out?
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-start gap-2">
              <Button
                className="w-30 p-3 flex justify-start text-[15px]"
                onClick={() => signOut()}
                variant="destructive"
                type="button"
              >
                <LogOut /> Log Out
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="ghost"
                className="w-30 p-3 flex justify-start text-[15px] border-2 border-white"
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
