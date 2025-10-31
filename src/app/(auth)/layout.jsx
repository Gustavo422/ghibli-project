"use client";

import { SessionProvider } from "next-auth/react";

export default function LoginLayout({ children }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
