"use client";
import { Button } from "@/components/ui/Button";
import { GoogleLogo } from "@/components/ui/svg/google-logo";
import { redirect, RedirectType } from "next/navigation";

import { signIn, useSession } from "next-auth/react";

export default function SignIn() {
  const { data: session, status } = useSession();
  //console.log("Session: " + session + "\nStatus: " + status);
  if (status == "unauthenticated" || status == "loading") {
    return (
      <>
        <Button
          variant="secondary"
          className="flex h-11 gap-3 border border-white"
          onClick={() => signIn("google", { redirectTo: "/" })}
          type="button"
        >
          <>
            <GoogleLogo className="h-5 w-auto" />
            Continue with Google
          </>
        </Button>
      </>
    );
  } else if (status == "authenticated") {
    redirect("/", RedirectType.replace);
  }
}
