import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/FilmCard";
import { Button } from "@/components/ui/Button";
import getFilms from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const titles = await getFilms("title");
  const images = await getFilms("image");
  const descriptions = await getFilms("description");
  const id = await getFilms("id");
  return (
    <main className="mt-20 flex h-[calc(100vh-84px)] flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-white sm:text-5xl md:text-6xl">
        Studio Ghibli Films
      </h1>
      <p className="mt-2 text-xl text-white sm:text-2xl md:text-3xl">
        List with all movies of Studio Ghibli
      </p>
      <ol className="mt-4 grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:mt-6 md:grid-cols-3 lg:grid-cols-4">
        {titles.map((title, i) => (
          <Card
            key={i}
            className="rounded-xl border-slate-900 bg-gradient-to-t from-slate-950 to-slate-950/80 p-0 hover:border-white hover:saturate-[.25]"
          >
            <CardContent className="relative w-full p-0">
              <Image
                src={images[i]}
                alt={`Image ${i}`}
                width={510}
                height={770}
                style={{ width: "100%", height: "auto" }}
                className="w-full rounded-xl object-cover"
              />
              <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/10" />
            </CardContent>

            <CardHeader>
              <CardTitle className="text-center text-base font-medium text-white sm:text-lg md:text-xl">
                {title}
              </CardTitle>
              <CardDescription>
                <p className="mt-2 line-clamp-4 text-center text-sm text-gray-400 sm:text-base md:text-lg">
                  {descriptions[i]}
                </p>
              </CardDescription>
            </CardHeader>
            <CardAction className="flex w-[100%] justify-center">
              <Link href={`/films/${id[i]}`} className="mb-2 h-10 w-[70%]">
                <Button variant="default" className="w-full text-lg">
                  Learn More
                </Button>
              </Link>
            </CardAction>
          </Card>
        ))}
      </ol>
    </main>
  );
}
