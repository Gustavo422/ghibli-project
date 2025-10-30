import Link from "next/link";

import HamburguerMenu from "@/components/header_components/HamburguerMenu";
import Profile from "@/components/header_components/Profile";
import { SearchForm } from "@/components/SearchForm";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { Separator } from "@/components/ui/Separator";

import { MobileSearchForm } from "@/components/SearchForm";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="fixed top-0 z-50 h-12">
      <nav className="bg-black/30 px-1 py-1 backdrop-blur-sm lg:px-2.5">
        <NavigationMenu className="flex h-full items-center justify-between">
          <NavigationMenuList className="h-full w-screen justify-between">
            <NavigationMenuItem>
              <div className="ml-3 flex h-[50px] items-center justify-center space-x-4">
                <Link href="/" className="relative h-[46px] w-[88px]">
                  <Image
                    src="/jiji-logo_02.png"
                    fill
                    quality={100}
                    priority
                    alt="Logo"
                    className="object-cover"
                  />
                </Link>
                <Separator
                  orientation="vertical"
                  className="h-[90%] w-[2px] rounded-lg bg-slate-200/10"
                />
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SearchForm className="sr-only lg:not-sr-only" />
            </NavigationMenuItem>
            <div className="flex h-[40px] gap-x-3 pr-3">
              <NavigationMenuItem className="relative m-0 flex aspect-square h-full items-center justify-center rounded-full bg-gray-200 p-0">
                <SessionProvider>
                  <Profile />
                </SessionProvider>
              </NavigationMenuItem>
              <NavigationMenuItem className="m-0 h-full w-full rounded-md border border-white/10 bg-[#0D0D0B]/70 p-0">
                <HamburguerMenu />
              </NavigationMenuItem>
              <NavigationMenuItem className="m-0 flex aspect-square h-full w-full items-center justify-center rounded-md border border-white/10 bg-[#0D0D0B]/70 p-0 lg:sr-only">
                <MobileSearchForm />
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <hr className="border-t border-gray-600 border-opacity-85" />
    </header>
  );
}
