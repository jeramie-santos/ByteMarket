import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeCategory, fetchCategories } from "./filterSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { data: categories, activeCategory } = useSelector((state) => state.filters); 

  useEffect(() => {
      dispatch(fetchCategories());
  }, [dispatch])   
    
  return (
    <div className="flex items-center gap-2">
        <label htmlFor="select-category">Choose a category: </label>
        <select id="select-category" value={activeCategory} onChange={(e) => dispatch(changeCategory(e.target.value))}
            className="border border-(--color-border-subtle) p-2 hover:cursor-pointer bg-(--color-surface)">
                <option value="All">All</option>
                {categories.map(category => 
                    <option key={category.id} value={category.name}>{category.name}</option>
                )}
        </select>
    </div>
  )
}

export default Categories
