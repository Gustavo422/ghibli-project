"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/Tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import { placeholderLetters, formattedName } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();
  const image = session?.user?.image;
  const username = session?.user?.name || "";
  const name = formattedName(username);

  const fallback = placeholderLetters(username);
  return (
    <div className="w-14 h-14 ">
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger className=" w-full h-full">
            <Avatar className="bg-white text-slate-950 text-lg sm:text-xl md:text-2xl font-bold antialiased w-full h-full bg hover:border-blue-600">
              <AvatarImage src={image} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent className="bg-transparent">
            <Card className="w-full bg-slate-950 rounded-lg mt-1 rounded-t-none border-opacity-85 border-gray-600 bg-slate-950/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-right text-lg">{name}</CardTitle>
                <CardDescription className="text-right text-sm">
                  You want to make a signout?
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-end">
                <Button
                  onClick={() => signOut()}
                  variant="destructive"
                  type="button"
                >
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
