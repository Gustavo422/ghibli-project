import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl text-white">404</h1>
        <blockquote className="mb-2 text-4xl text-gray-400">
          Not found Page!
        </blockquote>
        <Button asChild size="xl" className="mt-4 p-4 text-2xl md:mt-8">
          <Link href="/">Back To Home Page</Link>
        </Button>
      </div>
    </main>
  );
}
