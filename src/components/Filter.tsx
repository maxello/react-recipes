import { useFilter } from '../hooks/use-filter'
import { useSearchParams } from 'react-router';
import ProductCard from './ProductCard';
import type { FilterParam } from '../types';

const Filter = () => {
  const [params] = useSearchParams();
  const c = params.get('c');
  const a = params.get('a');
  const i = params.get('i');

  const activeParam = c ? 'c' : a ? 'a' : i ? 'i' : null;
  const categoryName = c ? 'Category' : a ? 'Area' : i ? 'Ingredient' : null;
  const value = c || a || i || '';

  const { data: meals } = useFilter(value, activeParam as FilterParam);
  console.log("meals", meals);

  if (!meals || !meals.length) {
    return <p className="text-center">No meals found</p>
  }

  return (
    <>
      {categoryName && (
        <h2 className="text-2xl mb-6 font-semibold">Filter by {categoryName}: <span className="text-primary">{value}</span></h2>
      )}
      <div className="gap-3 grid grid-cols-2 md:grid-cols-4">
        {meals.map((meal) => (
          <ProductCard
            key={meal.idMeal}
            title={meal.strMeal}
            src={meal.strMealThumb}
            path={`/meal/${meal.idMeal}-${meal.strMeal}`}
          />
        ))}
      </div>
    </>
  )
}

export default Filter