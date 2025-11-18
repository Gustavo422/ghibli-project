import FilmsList from "@/components/films/_components/FilmsList";
import PaginationComp from "@/components/films/_components/PaginationComp";

export const metadata = {
  title: "Studio Ghibli Films",
  description: "Session with all Studio Ghibli Films",
  openGraph: {
    title: "Films",
    description: "Films page",
  },
};

export default async function Page() {
  return (
    <main className="flex h-full w-full flex-col items-center py-5 text-center">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-accent text-3xl font-bold md:text-4xl">
            Studio Ghibli Films
          </h1>
          <p className="text-ring mt-2 text-lg md:text-xl">
            List with all movies of Studio Ghibli
          </p>
        </div>
        <FilmsList params={{ page: 1 }} />
        <PaginationComp actualPage={{ page: 1 }} />
      </div>
    </main>
  );
}
