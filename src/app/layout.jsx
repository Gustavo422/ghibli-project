import "@/styles/globals.css";
import Header from "@/components/Header";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/Sidebar";
import AppSidebar from "@/components/AppSidebar";
import { RocknRoll_One } from "next/font/google";

const rocknroll = RocknRoll_One({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  display: "swap",
  variable: "--font-rocknroll",
});

export const metadata = {
  title: "Jiji's House",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${rocknroll.variable} h-full hide-scrollbar`}
    >
      <body className="h-screen max-h-screen text-gray-200 antialiased flex flex-col bg-slate-950">
        <SidebarProvider>
          <AppSidebar />
          <Header />
          <div className="flex flex-col justify-center items-center mt-[84px] min-h-[calc(100vh-84px)]">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
