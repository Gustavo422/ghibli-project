import LoginForm from "@/components/LoginForm";
import { Skeleton } from "@/components/ui/Skeleton";
import { Suspense } from "react";

export const metadata = {
  title: "Login",
  description: "Session responsible for User's Login and SignIn",
  openGraph: {
    title: "LogIn",
    description: "LogIn page",
    images: [
      {
        url: "/openGraph_banner.png",
        width: 1200,
        height: 630,
        alt: "Open Graph Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentication Session",
    description: "LogIn, SignIn and Recovery Account",
    images: ["/openGraph_banner.png"],
  },
};
export default function Page() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center py-5 text-center">
      <Suspense
        fallback={<Skeleton className="h-[400px] w-[400px] bg-slate-900" />}
      >
        <LoginForm />
      </Suspense>
    </main>
  );
}
