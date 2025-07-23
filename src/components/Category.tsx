import { useCategory } from '../hooks/use-category'
import ProductCard from './ProductCard';

const Category = ({
  name
}: {
  name: string
}) => {

  const { data: meals } = useCategory(name);
  
  if (!meals) {
    return (<div className="text-center text-lg">Such category does not exist.</div>)
  } 

  return (
    <div className="gap-3 grid grid-cols-2 md:grid-cols-4 items-stretch h-full">
      {meals.map((meal) => (
        <ProductCard 
          key={meal.idMeal} 
          title={meal.strMeal}
          src={meal.strMealThumb}
          path={`/meal/${meal.idMeal}-${meal.strMeal}`}
        />
      ))}
    </div>
  )
}

export default Category