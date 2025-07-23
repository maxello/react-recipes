import { useSuspenseQuery } from "@tanstack/react-query";
import type { MealResponse } from "../types";

const fetchMeals = async (query: string): Promise<MealResponse> => {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`${import.meta.env.VITE_PRODUCT_API_URL}/search.php?s=${query}`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export function useSearch(query: string) {
  if (!query) {
    return { data: [] }
  }
  return useSuspenseQuery({
      queryKey: ['search', query],
      queryFn: fetchMeals.bind(null, query),
      select: (data: MealResponse) => {
        return data.meals
      },
      staleTime: Infinity
  });
}