import { useSuspenseQuery } from "@tanstack/react-query";
import type { CategoryResponse, FilterParam } from "../types";

const fetchMeals = async (query: string, param: FilterParam): Promise<CategoryResponse> => {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`${import.meta.env.VITE_PRODUCT_API_URL}/filter.php?${param}=${query}`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export function useFilter(query: string, param: FilterParam) {
  if (!query || !param) {
    return { data: [] }
  }
  return useSuspenseQuery({
      queryKey: ['filter', query, param],
      queryFn: fetchMeals.bind(null, query, param),
      select: (data: CategoryResponse) => {
        return data.meals
      },
      staleTime: Infinity
  });
}