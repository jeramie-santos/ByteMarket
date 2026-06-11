import { useDispatch, useSelector } from "react-redux"
import { changeSort } from "./filterSlice";

const SortBy = () => {
  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.filters.activeSort);
  
  return (
    <div className="flex gap-2 items-center">
        <label htmlFor="select-sort">
            Sort by:
        </label>
        <select id="select-socrt" value={activeSort} onChange={(e) => dispatch(changeSort(e.target.value))} 
            className="border border-(--color-border-subtle) p-2 hover:cursor-pointer bg-(--color-surface)">
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to low</option>
        </select>
    </div>
  )
}

export default SortBy;
