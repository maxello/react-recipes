import { Suspense } from 'react'
import { CategoriesSkeleton } from '../components/Skeletons'
import Filter from '../components/Filter'

const FilterPage = () => {
  return (
    <div className="py-4 md:py-6">
      <Suspense fallback={<CategoriesSkeleton />}>
        <Filter />
      </Suspense>
    </div>
  )
}

export default FilterPage