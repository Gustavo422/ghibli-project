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
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm">
        <ForgotPassForm />
      </div>
    </div>
  );
}
