import { Suspense } from 'react'
import Search from '../components/Search'
import { CategoriesSkeleton } from '../components/Skeletons'

const SearchPage = () => {
  return (
    <div className="py-4 md:py-6">
      <Suspense fallback={<CategoriesSkeleton />}>
        <Search />
      </Suspense>
    </div>
  )
}

export default SearchPage