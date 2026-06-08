import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./productsSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {

  const dispatch = useDispatch();
  const { data: products, loading } = useSelector((state) => state.products);

  const { activeCategory } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchProducts(activeCategory));
  }, [activeCategory, dispatch])

  if (loading) return <p className="text-center text-2xl">Loading products...</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => 
        <ProductCard key={product.id} product={product}/>
      )}
    </div>
  )
}

export default ProductList
