let cache = null;
export default async function characterFetch() {
  const res = await fetch(`https://ghibliapi.vercel.app/people`, {
    next: { revalidate: 777600 },
  });
  if (!res.ok) {
    throw new Error(`Bad request in fetched datas`);
  }
  cache = await res.json();
  return hierarchyDefine(fixFilms(cache));
}

const filmsIdAndNames = new Map([
  ["790e0028-a31c-4626-a694-86b7a8cada40", "Earwig and the Witch"],
  ["758bf02e-3122-46e0-884e-67cf83df1786", "Ponyo"],
  ["ebbb6b7c-945c-41ee-a792-de0e43191bd8", "Porco Rosso"],
  ["90b72513-afd4-4570-84de-a56c312fdf81", "The Cat Returns"],
  ["2de9426b-914a-4a06-a3a0-5e6d9d3886f6", "Arrietty"],
  ["58611129-2dbc-4a81-a72f-77ddfc1b1b49", "My Neighbor Totoro"],
  ["ea660b10-85c4-4ae3-8a5f-41cea3648e3e", "Kiki's Delivery Service"],
  ["0440483e-ca0e-4120-8c50-4c8cd9b965d6", "Princess Mononoke"],
  ["2baf70d1-42bb-4437-b551-e5fed5a87abe", "Castle in the Sky"],
  ["dc2e6bd1-8156-4886-adff-b39e6043af0c", "Spirited Away"],
]);

function fixFilms(datas) {
  const newArr = datas.map((people) => {
    if (people?.films.length === 2) {
      people.films = "Whisper of the Heart and The Cat Returns";
      return people;
    }
    const filmUrl = people.films[0];
    const filmId = filmUrl.replace("https://ghibliapi.vercel.app/films/", "");
    people.films = filmsIdAndNames.get(filmId);
    return people;
  });
  return newArr;
}

function hierarchyDefine(datas) {
  const groupedFilms = datas.reduce((accumulator, person) => {
    const film = person.films;
    if (!accumulator[film]) {
      accumulator[film] = [];
    }
    accumulator[film].push(person);
    return accumulator;
  }, {});
  return groupedFilms;
}

// The API provides datas with poor formatting, low quality, and unclear information. Because of this, I was considering
// creating some makeshift solutions, but that would probably hurt performance and lead to bad practices
