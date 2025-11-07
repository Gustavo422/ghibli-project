import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/FilmCard";
import { Button } from "@/components/ui/Button";
import { getFieldsFromAllFilms } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Studio Ghibli Films",
  description: "Session with all Studio Ghibli Films",
  openGraph: {
    title: "Films",
    description: "Films page",
  },
};

export default async function Page() {
  const datas = await getFieldsFromAllFilms(
    "title",
    "image",
    "description",
    "id",
  );
  return (
    <main className="flex h-full w-full flex-col items-center py-5 text-center">
      <div>
        <h1 className="text-3xl font-bold text-slate-200 sm:text-5xl md:text-6xl">
          Studio Ghibli Films
        </h1>
        <p className="mt-2 text-xl text-slate-200 sm:text-2xl md:text-3xl">
          List with all movies of Studio Ghibli
        </p>
        <ol className="mt-4 grid grid-cols-2 gap-3 p-2 sm:grid-cols-3 md:mt-6 md:grid-cols-3 md:gap-5 md:p-6 lg:grid-cols-4">
          {datas.map((film, i) => (
            <Card
              key={i}
              className="group rounded-xl border-slate-900 bg-linear-to-t from-slate-950 to-slate-950/80 p-0 transition-all duration-200 hover:scale-[1.02] hover:border-slate-200"
            >
              <CardContent className="flex w-full flex-col p-0">
                <Image
                  src={film?.image}
                  alt={`Image ${i}`}
                  width={510}
                  height={770}
                  style={{ width: "100%", height: "auto" }}
                  className="w-full rounded-t-xl object-cover brightness-75"
                />
              </CardContent>

              <CardHeader>
                <CardTitle className="line-clamp-1 text-center text-base font-medium text-slate-200 sm:text-lg md:text-xl">
                  {film?.title}
                </CardTitle>
                <CardDescription>
                  <p className="mt-2 line-clamp-4 text-center text-sm text-gray-400 sm:text-base md:text-lg">
                    {film?.description}
                  </p>
                </CardDescription>
              </CardHeader>
              <CardAction className="flex w-full justify-center">
                <Link href={`/films/${film?.id}`} className="mb-2 h-10 w-[70%]">
                  <Button
                    variant="default"
                    className="z-20 w-full cursor-pointer text-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardAction>
            </Card>
          ))}
        </ol>
      </div>
    </main>
  );
}
