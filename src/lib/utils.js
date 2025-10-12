import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

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
