import { useCategories } from '../hooks/use-categories';
import ProductCard from './ProductCard';

const Categories = () => {
  const { data: categories } = useCategories();

  return (
    <div className="gap-3 grid grid-cols-2 md:grid-cols-4">
      {categories.map((cat) => (
        <ProductCard
          key={cat.idCategory} 
          title={cat.strCategory}
          src={cat.strCategoryThumb}
          path={`/categories/${cat.strCategory}`}
          align={'center'}
        />
      ))}
    </div>
  )
}

export default Categories