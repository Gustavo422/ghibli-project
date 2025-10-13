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

export default async function Page() {
  const titles = await getFilms("title");
  const images = await getFilms("image");
  const descriptions = await getFilms("description");
  return (
    <main className=" flex flex-col items-center h-[calc(100vh-84px)] mt-20 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
        Studio Ghibli Films
      </h1>
      <p className="mt-2 text-xl sm:text-2xl md:text-3xl text-white">
        List with all movies of Studio Ghibli
      </p>
      <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 mt-4 md:mt-6 gap-4 p-6">
        {titles.map((title, i) => (
          <Card
            key={i}
            className="bg-gradient-to-t from-slate-950 to-slate-950/80 p-0 rounded-xl"
          >
            <CardContent className="relative w-full p-0">
              <Image
                src={images[i]}
                alt={`Image ${i}`}
                width={510}
                height={770}
                style={{ width: "100%", height: "auto" }}
                className=" w-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 w-full h-[100%] bg-gradient-to-t from-slate-950 via-slate-950/80  to-slate-950/10 " />
            </CardContent>

            <CardHeader>
              <CardTitle className="text-center text-white font-medium text-base sm:text-lg md:text-xl">
                {title}
              </CardTitle>
              <CardDescription>
                <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mt-2 line-clamp-4">
                  {descriptions[i]}
                </p>
              </CardDescription>
            </CardHeader>
            <CardAction className="w-[100%] flex justify-center">
              <Button variant="default" className=" w-[70%] h-10 mb-2 text-lg">
                Saiba Mais
              </Button>
            </CardAction>
          </Card>
        ))}
      </ol>
    </main>
  );
}
