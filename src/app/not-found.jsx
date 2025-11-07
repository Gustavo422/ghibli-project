import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-9xl text-slate-200">404</h2>
        <blockquote className="text-4xl text-gray-400">
          Not found Page
        </blockquote>
        <Button asChild size="xl" className="mt-4 p-4 text-xl">
          <Link href="/">Back To Home Page</Link>
        </Button>
      </div>
    </main>
  );
}
