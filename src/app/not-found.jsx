import { Button } from "@/components/ui/Button";
import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl text-white">404</h1>
        <blockquote className="text-4xl text-gray-400 mb-2">
          Not found Page!
        </blockquote>
        <Button
          asChild
          size="xl"
          className="p-4 text-2xl icon-lg flex flex-row flex-nowrap mt-4 md:mt-8"
        >
          <Link href="/">
            <ArrowLeftToLine className="w-6 h-6 md:w-8 md:h-8" />
            Back To Root
          </Link>
        </Button>
      </div>
    </main>
  );
}
