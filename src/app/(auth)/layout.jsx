"use client";

import { SessionProvider } from "next-auth/react";

export default function LoginLayout({ children }) {
  return (
    <div className="flex h-[100%] w-[100%] items-center justify-center">
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
