import { useSuspenseQuery } from "@tanstack/react-query";

type Meal = {
  idMeal: string,
  strMeal: string,
  strCategory: string,
  strArea: string,
  strInstructions: string,
  strMealThumb: string
}

type MealResponse = {
  meals: Meal[]
}

const fetchMeal = async (id: string): Promise<MealResponse> => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await fetch(`${import.meta.env.VITE_PRODUCT_API_URL}/lookup.php?i=${id}`);
  if (!res.ok) throw new Error('Failed to fetch meal');
  return res.json();
}

export function useMeal(id: string) {
  return useSuspenseQuery({
      queryKey: ['categories', id],
      queryFn: fetchMeal.bind(null, id),
      select: (data: MealResponse) => {
        return data.meals[0]
      },
      staleTime: Infinity
  });
}