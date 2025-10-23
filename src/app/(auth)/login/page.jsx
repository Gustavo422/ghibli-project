import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Login",
  description: "Session responsible for User's Login and SigIn",
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
    description: "LogIn, SigIn and Recovery Account",
    images: ["/openGraph_banner.png"],
  },
};

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
