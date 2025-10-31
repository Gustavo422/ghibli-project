"use cache";
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
  "search_form",
]);

const IDS = new Set([
  "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
  "4e236f34-b981-41c3-8c65-f8c9000b94e7",
  "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
  "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
  "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
  "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
  "45204234-adfd-45cb-a505-a8e7a676b114",
  "dc2e6bd1-8156-4886-adff-b39e6043af0c",
  "90b72513-afd4-4570-84de-a56c312fdf81",
  "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
  "112c1e67-726f-40b1-ac17-6974127bb9b9",
  "758bf02e-3122-46e0-884e-67cf83df1786",
  "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
  "45db04e4-304a-4933-9823-33f389e8d74d",
  "67405111-37a5-438f-81cc-4666af60c800",
  "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
  "5fdfb320-2a02-49a7-94ff-5ca418cae602",
  "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500",
  "790e0028-a31c-4626-a694-86b7a8cada40",
]);

async function fetchingData() {
  const res = await fetch(`https://ghibliapi.vercel.app/films/`, {
    next: { revalidate: 7776000 },
  });
  if (!res.ok) throw new Error(`Error in search Ghibli Films:\n${res.status}`);
  const cachedFilms = await res.json();
  return cachedFilms;
}

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
