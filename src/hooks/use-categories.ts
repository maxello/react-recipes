import { useSuspenseQuery } from "@tanstack/react-query";
import type { CategoriesResponse } from "../types";

const fetchCategories = async (): Promise<CategoriesResponse> => {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export function useCategories() {
  return useSuspenseQuery({
      queryKey: ['categories'],
      queryFn: fetchCategories,
      select: (data: CategoriesResponse) => {
        return data.categories
      },
      staleTime: Infinity
  });
}