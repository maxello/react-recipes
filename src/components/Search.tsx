import { useSearch } from '../hooks/use-search'
import { useSearchParams } from 'react-router';
import ProductCard from './ProductCard';

const Search = () => {
  const [params] = useSearchParams();
  const query = params.get('q');
  
  const { data: meals } = useSearch(query || '');

  if (!meals || !meals.length) {
    return <p className="text-center">No meals found</p>
  }

  return (
    <>
      <h2 className="text-2xl mb-6 font-semibold">Search by Meal: <span className="text-primary">{query}</span></h2>
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

export default Search