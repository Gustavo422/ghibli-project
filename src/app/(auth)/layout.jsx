"use client";

import { SessionProvider } from "next-auth/react";

export default function LoginLayout({ children }) {
  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center">
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
