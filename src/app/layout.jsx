import "@/styles/globals.css";
import { RocknRoll_One } from "next/font/google";

const rocknroll = RocknRoll_One({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  display: "swap",
  variable: "--font-rocknroll",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${rocknroll.variable} h-full`}>
      <body className="min-h-screen text-gray-200 antialiased flex flex-col bg-slate-950">
        {children}
      </body>
    </html>
  );
}
