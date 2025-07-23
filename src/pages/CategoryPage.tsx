import { Suspense } from "react"
import Category from "../components/Category"
import Hero from "../components/Hero"
import { useLocation } from "react-router"
import { capitalizeFirstLetter } from "../lib/utils"
import { CategoriesSkeleton } from "../components/Skeletons"
import { useCategories } from "../hooks/use-categories"

const CategoryPage = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const lastPathname = pathnames[pathnames.length - 1];
  const { data: categories } = useCategories();
  const category = categories.find((cat) => cat.strCategory === lastPathname);
  
  return (
    <>
      <title>{category?.strCategory}</title>
      <meta name="description" content={category?.strCategoryDescription} />
      
      <Hero 
        title={capitalizeFirstLetter(lastPathname)}
        text={category?.strCategoryDescription || ''}
      />
      <Suspense fallback={<CategoriesSkeleton />}>
        <Category name={lastPathname} />
      </Suspense>
    </>
  )
}

export default CategoryPage