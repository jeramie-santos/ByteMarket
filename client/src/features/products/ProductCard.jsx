import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const {id, title, price, image_url } = product;
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  }

  return (
    <Link to={`/product/${id}`} className="border p-2">
      <img src={image_url} alt={title} className="w-full h-48 object-cover mb-2"/>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </Link>
  )
}

export default ProductCard
