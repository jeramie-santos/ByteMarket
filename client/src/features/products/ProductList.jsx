import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productsSlice";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductList = () => {

  const dispatch = useDispatch();
  const { data: products, loading } = useSelector((state) => state.products);

  const { activeCategory, activeSort } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchProducts(activeCategory));
  }, [activeCategory, dispatch])

  const sortedProducts = [...products].sort((a, b) => {
    if (activeSort === "price-low") return a.price - b.price;
    if (activeSort === "price-high") return b.price - a.price;
    return 0;
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {loading ? Array(6).fill(0).map((_, index) => <ProductCardSkeleton key={index} />) :
      sortedProducts.map(product => 
        <ProductCard key={product.id} product={product}/>
      )}
    </div>
  )
}

export default ProductList
