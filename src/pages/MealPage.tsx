import { Suspense } from 'react';
import Meal from '../components/Meal';
import { MealDetailsSkeleton } from '../components/Skeletons';

const MealPage = () => {
  return (
    <div className="py-4 md:py-6">
      <Suspense fallback={<MealDetailsSkeleton />}>
        <Meal />
      </Suspense>
    </div>
  )
}

export default MealPage