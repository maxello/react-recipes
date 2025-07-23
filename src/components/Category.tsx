import { useCategory } from '../hooks/use-category'
import ProductCard from './ProductCard';

const Category = ({
  name
}: {
  name: string
}) => {

  const { data: meals } = useCategory(name);
  
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