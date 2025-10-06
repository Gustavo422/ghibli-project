import "@/styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-screen text-gray-900 antialiased flex flex-col bg-slate-950">
        {children}
      </body>
    </html>
  );
}
