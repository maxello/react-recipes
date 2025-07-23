import { useSuspenseQuery } from "@tanstack/react-query";

type Category = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

type CategoriesResponse = {
  categories: Category[]
}

const fetchCategories = async (): Promise<CategoriesResponse> => {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const res = await fetch(`${import.meta.env.VITE_PRODUCT_API_URL}/categories.php`);
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