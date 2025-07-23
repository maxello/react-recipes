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

