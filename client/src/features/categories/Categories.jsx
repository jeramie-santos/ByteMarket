import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "./categoriesSlice";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.categories); 

  useEffect(() => {
      dispatch(fetchCategories());
  }, [dispatch])   
    
  return (
    <div>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All</option>
            {categories.map(category => 
                <option key={category.id} value={category.name}>{category.name}</option>
            )}
        </select>
    </div>
  )
}

export default Categories
