import ForgotPassForm from "@/components/ForgotPassForm";

export const metadata = {
  title: "Recovery Account Session",
  description: "Session responsible for Recovery Account",
  openGraph: {
    title: "Recovery Account",
    description: "Recovery your account...",
  },
};

export default function Page() {
  return (
    <div className="flex min-h-full min-w-full flex-col items-center justify-center text-gray-200 antialiased">
      <ForgotPassForm />
    </div>
  );
}
