import FilmPage from "@/components/film_page/FilmPage";
import LoadSkeleton from "@/components/film_page/LoadSkeleton";
import { Suspense } from "react";

/*
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadatas = await getFilmForId(slug, "title", "description");
  return {
    title: metadatas?.title,
    description: metadatas?.description,
  };
}
*/

export default function Page({ params }) {
  return (
    <Suspense className="min-h-full min-w-full" fallback={<LoadSkeleton />}>
      <FilmPage params={params} />
    </Suspense>
  );
}
