import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productsSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {

  const dispatch = useDispatch();
  const { data: products, loading } = useSelector((state) => state.products);

  const { activeCategory, activeSort } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchProducts(activeCategory));
  }, [activeCategory, dispatch])

  if (loading) return <p className="text-center text-2xl">Loading products...</p>

  const sortedProducts = [...products].sort((a, b) => {
    if (activeSort === "price-low") return a.price - b.price;
    if (activeSort === "price-high") return b.price - a.price;
    return 0;
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {sortedProducts.map(product => 
        <ProductCard key={product.id} product={product}/>
      )}
    </div>
  )
}

export default ProductList
