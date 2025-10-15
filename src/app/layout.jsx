import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/Sidebar";
import "@/styles/globals.css";
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
      className={`${rocknroll.variable} hide-scrollbar h-full`}
    >
      <body className="flex h-screen max-h-screen flex-col bg-slate-950 text-gray-200 antialiased">
        <SidebarProvider>
          <AppSidebar />
          <Header />
          <div className="mx-auto mt-[84px] flex min-h-[calc(100vh-84px)] flex-col items-center justify-center">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
