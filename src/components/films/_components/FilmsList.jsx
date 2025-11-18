import FilmCard from "@/components/films/_components/FilmCard";
import { getFilmsForPagination } from "@/lib/api";

export default async function FilmsList({ params }) {
  const { page } = await params;

  let endsIn = page * 8 + 1;
  const startsIn = endsIn - 8;
  if (endsIn > 21) {
    endsIn = 21;
  }

  const datas = await getFilmsForPagination(
    startsIn,
    endsIn,
    "title",
    "image",
    "description",
    "id",
  );
  return (
    <>
      <ol className="flex w-fit flex-wrap items-center justify-center gap-1.5 md:gap-3">
        {datas.map((film, i) => (
          <FilmCard
            key={i}
            id={film?.id}
            image={film?.image}
            title={film?.title}
            description={film?.description}
          />
        ))}
      </ol>
    </>
  );
}
