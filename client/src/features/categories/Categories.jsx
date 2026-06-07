import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeCategory, fetchCategories } from "./categoriesSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { data: categories, activeCategory } = useSelector((state) => state.categories); 

  useEffect(() => {
      dispatch(fetchCategories());
  }, [dispatch])   
    
  return (
    <div>
        <select value={activeCategory} onChange={(e) => dispatch(changeCategory(e.target.value))}>
            <option value="All">All</option>
            {categories.map(category => 
                <option key={category.id} value={category.name}>{category.name}</option>
            )}
        </select>
    </div>
  )
}

export default Categories
