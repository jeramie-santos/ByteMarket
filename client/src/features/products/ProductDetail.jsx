import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { fetchProductById } from "./productsSlice";
import { addToCart } from "../cart/cartSlice";
import { triggerToast } from "../toasts/toastSlice";

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
  
  const { title, price, image_url, description } = selectedProduct || {};

  const isProductEmpty = !selectedProduct || !selectedProduct.id;

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
    dispatch(triggerToast(`${title || "Item"} added to shopping cart!`))
  }

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => navigate(-1)} className="text-(--color-text-muted) self-start py-2 px-4 rounded-md hover:cursor-pointer">&larr; Back to Shop</button>
      <div className="flex flex-col bg-(--color-surface) border border-(--color-border-subtle) gap-4 p-4 rounded-xl shadow-2xl md:flex-row md:p-5 lg:p-6">
        <div className="flex-1 w-full flex items-center justify-center bg-gray-200 rounded-lg p-4">
            <img src={image_url} alt={title} className="max-w-full max-h-87 object-contain"/>
        </div>
        <div className="flex-1 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-(--color-text-main) font-semibold">{title || "Loading Product..."}</h3>
              <p className="text-3xl text-(--color-text-muted) font-bold">${price || "0.00"}</p>
            </div>
            <hr className="text-(--color-border-subtle)"/>
            <div className="flex-1 flex flex-col gap-4">
              <p>{description || "No Description."}</p>
              <button onClick={handleAddToCart}
                className="mt-auto bg-(--color-primary) py-4 text-(--color-on-primary) border border-(--color-primary) rounded-xl hover:bg-(--color-primary-hover) hover:cursor-pointer font-semibold"
                disabled={isProductEmpty}
                >
                { isProductEmpty ? "Product Unavailable" : "Add to  Cart"}
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
