import { getFieldsFromAllFilms } from "@/lib/api";
import Fuse from "fuse.js";

export async function searchResult(searched_word) {
  const list = await getFieldsFromAllFilms(
    "image",
    "title",
    "original_title_romanised",
    "description",
    "id",
  );
  const options = {
    keys: ["title", "title_romanised"],
    threshold: 0.3,
  };
  const fuse = new Fuse(list, options);
  const result = fuse.search(searched_word);
  return result;
}
