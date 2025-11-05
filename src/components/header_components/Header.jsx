import HamburguerMenu from "@/components/header_components/HamburguerMenu";
import Profile from "@/components/header_components/Profile";
import Logo from "@/components/Logo";
import { SearchForm } from "@/components/search_components/SearchForm";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

export default async function Header() {
  return (
    <Suspense>
      <header className="fixed top-0 z-50 h-12">
        <nav className="bg-black/30 px-1 py-1 backdrop-blur-sm lg:px-2.5">
          <NavigationMenu className="flex h-full items-center">
            <NavigationMenuList className="h-full w-screen justify-between px-3">
              <NavigationMenuItem className="order-2 sm:order-1">
                <Logo />
              </NavigationMenuItem>
              <NavigationMenuItem className="order-1 sm:order-2">
                <SearchForm />
              </NavigationMenuItem>
              <div className="order-3 flex h-10 items-center justify-center gap-x-3">
                <NavigationMenuItem className="relative h-full w-full">
                  <SessionProvider>
                    <Profile />
                  </SessionProvider>
                </NavigationMenuItem>
                <NavigationMenuItem className="h-full w-full">
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
