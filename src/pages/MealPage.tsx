import { Suspense } from 'react';
import Meal from '../components/Meal';

const MealPage = () => {
  return (
    <div className="py-4 md:py-6">
      <Suspense fallback={<p>Loading...</p>}>
        <Meal />
      </Suspense>
    </div>
  )
}

export default MealPage