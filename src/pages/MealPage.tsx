import { Suspense } from 'react'
// import { useMeal } from '../hooks/use-meal';
// import { useLocation } from 'react-router';
// import { useCategories } from '../hooks/use-categories';
// import { useCategory } from '../hooks/use-category';
import Meal from '../components/Meal';

const MealPage = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Meal />
      </Suspense>
    </>
    
  )
}

export default MealPage