const FIELDS = new Set([
  "id",
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
]);

export default async function getFilms(field) {
  field = field.toLowerCase();
  if (!FIELDS.has(field)) {
    throw new Error(`Invalid Field: ${field}`);
  }

  const res = await fetch(`https://ghibliapi.vercel.app/films/`, {
    next: { revalidate: 7776000 },
  });
  if (!res.ok) throw new Error("Error in search Ghibli Films: " + res.status);
  const cachedFilms = await res.json();
  const dataType = cachedFilms.map((film) => film?.[field]);
  return dataType;
}
