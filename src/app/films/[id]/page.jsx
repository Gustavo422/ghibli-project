import FilmPage from "@/components/FilmPage";
import getFilms from "@/lib/api";
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
  const metadataTitle = await getFilms("title", id);
  const metadataDescription = await getFilms("description", id);
  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

export default function Page({ params }) {
  return (
    <Suspense fallback={<div>Carregando filme…</div>}>
      <FilmPage params={params} />
    </Suspense>
  );
}
