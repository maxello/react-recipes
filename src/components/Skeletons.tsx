import { Skeleton } from '@heroui/react'

const ProductCardSkeleton = () => {
  return (
    <div className="border shadow-none rounded-md">
      <Skeleton className="aspect-square relative mb-3 overflow-hidden rounded-md" />
      <Skeleton className="m-3 mt-0 h-7 rounded-md" />
    </div>
  )
}

export const CategoriesSkeleton = () => {
  return (
    <div className="gap-3 grid grid-cols-2 md:grid-cols-4">
      {Array(8).fill('').map((_, ind) => (<ProductCardSkeleton key={ind} />))}
    </div>
  )
}

export const MealDetailsSkeleton = () => {
  return (
    <div>
      <Skeleton className="max-w-[90%] md:max-w-[300px] h-9 rounded-md mb-6 md:mb-8" />
      <div className="grid md:grid-cols-2 gap-10 md:gap-6">
        <div className="flex flex-col gap-3">
          <Skeleton className="aspect-square rounded-md" />
          <div className="flex gap-2 flex-nowrap">
            {Array(2).fill('').map((_, ind) => (<Skeleton key={ind} className="w-18 h-7 rounded-md mb-6 md:mb-8" />))}
          </div>
        </div>
        <div className="flex flex-col">
          <Skeleton className="h-10 rounded-md mb-3" />
          <Skeleton className="h-30 rounded-md mb-6 md:mb-8" />
        </div>
      </div>
    </div>
  )
}

