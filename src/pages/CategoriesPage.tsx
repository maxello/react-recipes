import { Suspense } from "react"
import Categories from "../components/Categories"
import { CategoriesSkeleton } from "../components/Skeletons"
import Hero from "../components/Hero"

const CategoriesPage = () => {
  return (
    <>
      <title>Categories</title>
      <meta name="description" content="This is a Categories page" />

      <Hero 
        title={'Categories'}
        text={'Discover delicious recipes from around the world. Easy to follow, fun to make, and even better to eat.'} 
      />
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
    </>
  )
}

export default CategoriesPage