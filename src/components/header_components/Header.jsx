import Link from "next/link";

import HamburguerMenu from "@/components/header_components/HamburguerMenu";
import Profile from "@/components/header_components/Profile";
import { SearchForm } from "@/components/search_components/SearchForm";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { Separator } from "@/components/ui/Separator";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { Suspense } from "react";

export default async function Header() {
  return (
    <Suspense>
      <header className="fixed top-0 z-50 h-12">
        <nav className="bg-black/30 px-1 py-1 backdrop-blur-sm lg:px-2.5">
          <NavigationMenu className="flex h-full items-center justify-between">
            <NavigationMenuList className="h-full w-screen justify-between">
              <NavigationMenuItem className="order-2 sm:order-1">
                <div className="transition-200 ml-3 flex h-[50px] items-center justify-center space-x-4 transition-all hover:scale-105">
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
                    className="sr-only h-[95%] w-px rounded-lg bg-slate-600 sm:not-sr-only"
                  />
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem className="search-sm order-1 ml-2 rounded-md border border-white/10 bg-black/55 transition-all duration-300 ease-out hover:scale-105 hover:border-black hover:text-black sm:order-2 sm:bg-transparent sm:pl-0 hover:sm:text-white">
                <SearchForm />
              </NavigationMenuItem>
              <div className="order-3 flex h-10 gap-x-3 pr-3">
                <NavigationMenuItem className="relative m-0 flex aspect-square h-full items-center justify-center rounded-full p-0">
                  <SessionProvider className="border hover:border-white/10">
                    <Profile />
                  </SessionProvider>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-0 h-full w-full rounded-md border border-white/10 bg-black/5 p-0">
                  <HamburguerMenu />
                </NavigationMenuItem>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <hr className="border-t border-slate-600" />
      </header>
    </Suspense>
  );
}
