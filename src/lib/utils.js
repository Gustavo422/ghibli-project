import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SLUG_ID = new Map([
  ["castle-in-the-sky", "2baf70d1-42bb-4437-b551-e5fed5a87abe"],
  ["grave-of-the-fireflies", "12cfb892-aac0-4c5b-94af-521852e46d6a"],
  ["my-neighbor-totoro", "58611129-2dbc-4a81-a72f-77ddfc1b1b49"],
  ["kikis-delivery-service", "ea660b10-85c4-4ae3-8a5f-41cea3648e3e"],
  ["only-yesterday", "4e236f34-b981-41c3-8c65-f8c9000b94e7"],
  ["porco-rosso", "ebbb6b7c-945c-41ee-a792-de0e43191bd8"],
  ["pom-poko", "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c"],
  ["whisper-of-the-heart", "ff24da26-a969-4f0e-ba1e-a122ead6c6e3"],
  ["princess-mononoke", "0440483e-ca0e-4120-8c50-4c8cd9b965d6"],
  ["my-neighbors-the-yamadas", "45204234-adfd-45cb-a505-a8e7a676b114"],
  ["spirited-away", "dc2e6bd1-8156-4886-adff-b39e6043af0c"],
  ["the-cat-returns", "90b72513-afd4-4570-84de-a56c312fdf81"],
  ["howls-moving-castle", "cd3d059c-09f4-4ff3-8d63-bc765a5184fa"],
  ["tales-from-earthsea", "112c1e67-726f-40b1-ac17-6974127bb9b9"],
  ["ponyo", "758bf02e-3122-46e0-884e-67cf83df1786"],
  ["arrietty", "2de9426b-914a-4a06-a3a0-5e6d9d3886f6"],
  ["from-up-on-poppy-hill", "45db04e4-304a-4933-9823-33f389e8d74d"],
  ["the-wind-rises", "67405111-37a5-438f-81cc-4666af60c800"],
  ["the-tale-of-the-princess-kaguya", "578ae244-7750-4d9f-867b-f3cd3d6fecf4"],
  ["when-marnie-was-there", "5fdfb320-2a02-49a7-94ff-5ca418cae602"],
  ["the-red-turtle", "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500"],
  ["earwig-and-the-witch", "790e0028-a31c-4626-a694-86b7a8cada40"],
]);

export function placeholderLetters(username) {
  let letters = [];
  try {
    if (username && typeof username === "string" && username.trim()) {
      username = username.toUpperCase().trim();
      const arrayUsername = username.split(/\s+/);
      if (arrayUsername[0]) letters.push(arrayUsername[0][0]);
      if (arrayUsername[1]) letters.push(arrayUsername[1][0]);
    }
    if (letters.length < 2) letters = ["U", "N"]; //Fallback
  } catch (error) {
    letters = ["U", "N"];
    throw new Error(`Failed to create a placeholder - see error:\n${error}`);
  }
  return letters.join("");
}

export function formattedName(username) {
  const name = username
    .toLowerCase()
    .split(" ")
    .map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1))
    .join(" ");
  return name;
}

export function slugCreator(title) {
  const slug = title.toLowerCase().replaceAll(" ", "-").replaceAll("'", "");
  return slug;
}

export function compareIdAndSlug(slug) {
  const id = SLUG_ID.get(slug);
  return id;
}
