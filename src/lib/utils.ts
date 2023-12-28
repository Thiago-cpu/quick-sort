import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomSeed = () =>
  [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
