import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Meal } from "../types"

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

export function getIngredients(meal: Meal, property: string): string[] {
  return Object.entries(meal)
    .filter(([key, value]) => key.startsWith(property) && value?.trim())
    .map(([_, value]) => value as string)
}

export function transformStringToArray(input: string, divider: string): string[] {
  return input
    .split(divider)
    .map(str => str.trim())
    .filter(Boolean)
}
