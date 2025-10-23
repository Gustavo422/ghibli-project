import SignIn from "@/components/SignIn";

export const metadata = {
  title: "SignIn",
  description: "Session responsible for User's SignIn",
  openGraph: {
    title: "SignIn",
    description: "SignIn page",
  },
};

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm">
        <SignIn />
      </div>
    </div>
  );
}
