import { Film, LogIn, House } from "lucide-react";
import * as React from "react";
import clsx from "clsx";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarTrigger,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/Sidebar";
import Link from "next/link";

const items = [
  { title: "Home", url: "/", icon: House },
  {
    title: "Login",
    url: "/login",
    icon: LogIn,
  },
  {
    title: "Films",
    url: "/films",
    icon: Film,
  },
];

export default function AppSidebar(...props) {
  return (
    <Sidebar
      className={clsx("border border-0.5", ...props)}
      side="left"
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Jiji's House</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
