import FilmPage from "@/components/film_page/FilmPage";
import LoadSkeleton from "@/components/film_page/LoadSkeleton";
import { getFilmForId } from "@/lib/api";
import { Suspense } from "react";
/*
  "title",
  "original_title",
  "original_title_romanised",
  "image",
  "movie_banner",
  "description",
  "director",
  "producer",
  "release_date",
  "running_time",
  "rt_score",
  "people",
  "species",
  "locations",
  "vehicles",
  "url",
*/

export async function generateMetadata({ params }) {
  const { id } = await params;
  const metadatas = await getFilmForId(id, "title", "description");
  return {
    title: metadatas?.title,
    description: metadatas?.description,
  };
}

export default function Page({ params }) {
  return (
    <Suspense className="min-h-full min-w-full" fallback={<LoadSkeleton />}>
      <FilmPage params={params} />
    </Suspense>
  );
}
