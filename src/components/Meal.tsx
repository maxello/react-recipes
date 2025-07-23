import { useMeal } from '../hooks/use-meal'
import { useLocation } from 'react-router';
import { parseSegment } from '../lib/utils';

const Meal = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const lastPathname = pathnames[pathnames.length - 1];
  const res = parseSegment(lastPathname);
  if (!res) {
    return null;
  }
  const { data: meal } = useMeal(res.id);
  console.log("meal", meal);
  return (
    <>
      <title>{meal?.strMeal}</title>
      <meta name="description" content={`This is a recipe of ${meal?.strMeal}`} />

      <div>Meal</div>
    </>
    
  )
}


export default Meal