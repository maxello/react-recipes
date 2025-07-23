import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function parseSegment(str: string): { id: string, name: string } | null {
  const index = str.indexOf('-')
  if (index === -1) return null;

  const id = str.slice(0, index);
  const name = str.slice(index + 1);

  return { id, name }
}
