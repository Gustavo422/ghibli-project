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
  "all",
]);

function getSearchFormData(films) {
  const datas = films.map((items) => ({
    title: items?.title,
    title_romanised: items?.original_title_romanised,
    description: items?.description,
    image: items?.image,
    id: items?.id,
  }));
  return datas;
}

function getAllFilmData(films, id) {
  const allFilms = films.find((item) => item?.id === id);
  if (allFilms) return allFilms;
  else throw new Error(`Invalid id: ${id}`);
}

function getFieldFromFilm(films, field, id) {
  const fieldFromFilm = films.find((item) => item?.id === id)[field];
  if (fieldFromFilm) return fieldFromFilm;
  else throw new Error(`Invalid fields: ${field} and ${id}`);
}

function getFieldFromAllFilms(films, field) {
  const fieldFromAllFilms = films.map((item) => item?.[field]);
  if (fieldFromAllFilms) return fieldFromAllFilms;
  else throw new Error(`Invalid Field: ${field}`);
}

export default async function getFilms(field, id) {
  const cachedFilms = await fetchingData();

  if (!FIELDS.has(field)) throw new Error(`Invalid Field: ${field}`);
  if (id && !IDS.has(id)) throw new Error(`Invalid Id: ${id}`);

  switch (field) {
    case "search_form":
      return getSearchFormData(cachedFilms);
    case "all":
      return getAllFilmData(cachedFilms, id);
    default:
      return id
        ? getFieldFromFilm(cachedFilms, field, id)
        : getFieldFromAllFilms(cachedFilms, field);
  }
}
