import { Suspense } from "react"
import Categories from "../components/Categories"
import { CategoriesSkeleton } from "../components/Skeletons"
import Hero from "../components/Hero"

const HomePage = () => {
  return (
    <>
      <title>Recipes</title>
      <meta name="description" content="This is a Home page" />

      <Hero 
        title={'Cook with joy, eat with love'} 
        text={'Discover delicious recipes from around the world. Easy to follow, fun to make, and even better to eat. Choose your ingredients — we’ll show you what to cook. Smart recipes for everyday life.'} 
      />
      <h2 className="text-2xl mb-6 font-semibold">Categories</h2>
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
    </>
  )
}

export default HomePage