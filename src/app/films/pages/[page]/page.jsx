import FilmsList from "@/components/films/_components/FilmsList";
import PaginationComp from "@/components/films/_components/PaginationComp";
import { Suspense } from "react";

export default function Page({ params }) {
  return (
    <div className="flex min-h-full min-w-full flex-col items-center justify-center gap-y-3">
      <Suspense fallback={<h1>Waiting...</h1>}>
        <div className="mt-26">
          <FilmsList params={params} />
          <PaginationComp actualPage={params} />
        </div>
      </Suspense>
    </div>
  );
}
