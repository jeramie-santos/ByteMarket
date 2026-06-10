import Categories from "./Categories"
import SortBy from "./SortBy"

const Filter = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-6">
        <Categories />
        <SortBy />        
    </div>
  )
}

export default Filter
