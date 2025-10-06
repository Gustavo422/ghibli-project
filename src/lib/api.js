export default async function Films() {
  const res = await fetch(`https://ghibliapi.vercel.app/films/`);
  if (!res.ok) throw new Error("Error in search Ghibli Films: " + res.status);
  const films = await res.json();
  return films;
}

export async function Titles() {
  const films = await Films();
  const titles = await films.slice(0, 22).map((film) => film?.title);
  return titles;
}

export async function Images() {
  const films = await Films();
  const images = await films.slice(0, 22).map((film) => film?.image);
  return images;
}

export async function Description() {
  const films = await Films();
  const description = await films.slice(0, 22).map((film) => film?.description);
  return description;
}
