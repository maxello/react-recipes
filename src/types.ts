export type IngredientTableRows = {
  key: number,
  ingredient: string,
  measure: string
}

export type IngredientTableCols = {
  key: string,
  label: string
}

export type IngredientKeys = `strIngredient${number}`

export type MeasureKeys = `strMeasure${number}`

export type Meal = {
  idMeal: string,
  strMeal: string,
  strCategory: string,
  strArea: string,
  strInstructions: string,
  strMealThumb: string,
  strYoutube: string,
  strTags: string
} & {
  [key in IngredientKeys | MeasureKeys]?: string | null
}

export type MealResponse = {
  meals: Meal[]
}

type Category = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export type CategoriesResponse = {
  categories: Category[]
}

type CMeal = {
  idMeal: string,
  strMealThumb: string,
  strMeal: string,
}

export type CategoryResponse = {
  meals: CMeal[]
}