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
]);

let cache = null;
async function getFilms() {
  const response = await fetch(`https://ghibliapi.vercel.app/films/`, {
    next: { revalidate: 7776000 },
  });

  if (!response.ok) {
    throw new Error(`Invalid Request, verify the Ghibli Api`);
  }

  cache = await response.json();
  return cache;
}

export async function getFilmForId(id, ...fields) {
  const fieldsValidation = fields.every((item) => FIELDS.has(item));
  const res = await getFilms();
  const film = res.find((item) => item?.id === id);

  if (film && fieldsValidation) {
    const result = Object.fromEntries(
      fields.map((field) => [field, film[field]]),
    );

    return result;
  } else {
    let error = "";
    if (!id) {
      error = `Invalid ID:\n${id}\n`;
    }
    if (!fieldsValidation) {
      error = error + `Invalid Field(s):\n${fields.join(", ")}`;
    }
    throw new Error(error);
  }
}

export async function getFieldsFromAllFilms(...fields) {
  const fieldsValidation = fields.every((item) => FIELDS.has(item));
  const res = await getFilms();

  if (fieldsValidation) {
    const result = res.map((item) =>
      Object.fromEntries(fields.map((key) => [key, item[key]])),
    );

    return result;
  } else {
    throw new Error(`Invalid fields: ${fields}`);
  }
}

export async function getFilmsForPagination(startsIn, endsIn, ...fields) {
  if (!Number.isInteger(startsIn) || !Number.isInteger(endsIn)) {
    throw new Error("startsIn and endsIn must to be Integers");
  }

  const fieldsValid =
    fields.length === 0 || fields.every((item) => FIELDS.has(item));

  if (!fieldsValid) throw new Error("Invalid fields");
  const res = await getFilms();

  if (startsIn < 0 || endsIn > res.length || startsIn >= endsIn) {
    throw new Error("Invalid interval");
  }

  const pageSlice = res.slice(startsIn, endsIn);
  const result = pageSlice.map((item) =>
    Object.fromEntries(fields.map((key) => [key, item[key]])),
  );

  return result;
}

export async function verifyId(id) {
  const res = await getFilms();
  const idValidation = res.some((item) => item?.id === id);
  return idValidation;
}
