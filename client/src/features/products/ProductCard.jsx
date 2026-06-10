import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { triggerToast } from "../toasts/toastSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const {id, title, price, image_url } = product;
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    dispatch(triggerToast(`${title || "Item"} added to shopping cart!`))
  }

  return (
    <Link to={`/product/${id}`} className="flex flex-col gap-2 bg-(--color-surface) p-4 border border-(--color-border-subtle) rounded-xl shadow-xl">
      <img src={image_url} alt={title} className="w-full h-48 object-cover mb-2"/>
      <p className="text-2xl font-semibold text-(--color-text-main)">{title}</p>
      <p className="text-2xl text-(--color-text-muted)">${price}</p>
      <button onClick={handleAddToCart} className="bg-(--color-primary) py-2 text-(--color-on-primary) rounded-xl hover:bg-(--color-primary-hover) hover:cursor-pointer font-bold">
        Add to Cart
      </button>
    </Link>
  )
}

export default ProductCard
