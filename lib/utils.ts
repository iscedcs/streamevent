import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const adjectives = [
  "Adventurous",
  "Brave",
  "Clever",
  "Dazzling",
  "Elegant",
  "Fierce",
  "Gentle",
  "Happy",
  "Intelligent",
  "Jolly",
  "Kind",
  "Lively",
  "Magnificent",
  "Noble",
  "Optimistic",
  "Peaceful",
  "Quirky",
  "Radiant",
  "Sincere",
  "Thoughtful",
  "Unique",
  "Vibrant",
  "Wise",
  "Zestful",
];

const nouns = [
  "Aardvark",
  "Butterfly",
  "Cheetah",
  "Dolphin",
  "Elephant",
  "Flamingo",
  "Giraffe",
  "Hedgehog",
  "Iguana",
  "Jaguar",
  "Koala",
  "Lemur",
  "Meerkat",
  "Narwhal",
  "Octopus",
  "Penguin",
  "Quokka",
  "Raccoon",
  "Sloth",
  "Tiger",
  "Unicorn",
  "Vulture",
  "Walrus",
  "Xenops",
  "Yak",
  "Zebra",
];

export function generateUniqueName(): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective} ${noun}`;
}
