import { useMeal } from '../hooks/use-meal'
import { useLocation } from 'react-router';
import { parseSegment } from '../lib/utils';
import MealDetails from './MealDetails';

const Meal = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const lastPathname = pathnames[pathnames.length - 1];
  const res = parseSegment(lastPathname);
  if (!res) {
    return null;
  }
  const { data: meal } = useMeal(res.id);
  
  return (
    <>
      <title>{meal?.strMeal}</title>
      <meta name="description" content={`This is a recipe of ${meal?.strMeal}`} />

      <h2 className="text-3xl mb-6 md:mb-8 font-semibold">{meal?.strMeal}</h2>
      <MealDetails data={meal} />
    </>
    
  )
}


export default Meal