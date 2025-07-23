import { useSuspenseQuery } from "@tanstack/react-query";
import type { CategoryResponse } from "../types";

const fetchCategories = async (category: string): Promise<CategoryResponse> => {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export function useCategory(category: string) {
  return useSuspenseQuery({
      queryKey: ['category', category],
      queryFn: fetchCategories.bind(null, category),
      select: (data: CategoryResponse) => {
        return data.meals
      },
      staleTime: Infinity
  });
}