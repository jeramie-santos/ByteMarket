import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCategory } from "./categoriesSlice";

const Categories = () => {
    const dispatch = useDispatch();
    const { data: categories, loading } = useSelector((state) => state.categories); 

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])    
    
  return (
    <div>
        <select>
            <option value="All">All</option>
            {categories.map(category => 
                <option key={category.id} value={category.name}>{category.name}</option>
            )}
        </select>
    </div>
  )
}

export default Categories
