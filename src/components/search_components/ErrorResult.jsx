import { Button } from "@/components/ui/Button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function ErrorResult({ setOpen }) {
  return (
    <div className="animate-fade-in flex w-full flex-col items-center justify-center gap-y-3">
      <h1 className="text-accent text-base">Someting went wrong...</h1>
      <Link href="/">
        <Button
          variant="destructive"
          className="flex items-center justify-center gap-2 bg-red-700 px-3 py-2 hover:bg-red-800"
          type="button"
          onClick={() => setOpen(false)}
        >
          <HomeIcon className="text-accent" />
          <p className="text-accent text-[15px] font-medium">
            Back to home Page
          </p>
        </Button>
      </Link>
    </div>
  );
}
