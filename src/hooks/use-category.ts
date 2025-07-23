import { useSuspenseQuery } from "@tanstack/react-query";

type Meal = {
  idMeal: string,
  strMealThumb: string,
  strMeal: string,
}

type CategoryResponse = {
  meals: Meal[]
}

const fetchCategories = async (category: string): Promise<CategoryResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`${import.meta.env.VITE_PRODUCT_API_URL}/filter.php?c=${category}`);
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