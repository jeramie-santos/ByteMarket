import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { fetchProductById } from "./productsSlice";
import { addToCart } from "../cart/cartSlice";

const ProductDetail = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { selectedProduct, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch])

  if (loading) return <p className="text-center text-2xl">Loading item details...</p>;
  if (error) return <p className="text-center text-2xl">Error loading product: {error}</p>
  
  const { title, price, image_url, description } = selectedProduct;

  const isProductEmpty = !selectedProduct || !selectedProduct.id;

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => navigate(-1)} className="bg-(--color-secondary) text-(--color-on-primary) self-start py-2 px-4 rounded-md">Back</button>
      <div className="flex flex-col bg-(--color-surface) border border-(--color-border-subtle) gap-4 p-4 rounded-xl shadow-2xl">
        <div>
            <img src={image_url} alt={title} />
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-(--color-text-main) font-semibold">{title || "Loading Product..."}</h3>
            <p className="text-2xl text-(--color-text-muted)">${price || "0.00"}</p>
            <p>{description || "No Description."}</p>
        </div>
        <button onClick={() => dispatch(addToCart(selectedProduct))}
          className="bg-(--color-primary) py-4 text-(--color-on-primary) rounded-md hover:bg-(--color-primary-hover) hover:cursor-pointer font-semibold"
          disabled={isProductEmpty}
          >
          { isProductEmpty ? "Product Unavailable" : "Add to  Cart"}
        </button>
      </div>
      
    </div>
  )
}

export default ProductDetail
