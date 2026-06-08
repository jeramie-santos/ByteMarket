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

  if (loading) return <p>Loading item details...</p>;
  if (error) return <p>Error loading product: {error}</p>
  
  const { title, price, image_url, description } = selectedProduct;

  return (
    <div className="flex flex-col gap-4">
      <button onClick={() => navigate(-1)} className="bg-black text-white self-start py-1 px-2">Back</button>
      <div className="flex flex-col border gap-4 p-4 ">
        <div>
            <img src={image_url} alt={title} />
        </div>
        <div className="flex flex-col gap-2">
            <h3>{title}</h3>
            <p>${price}</p>
            <p>{description || "No Description."}</p>
        </div>
        <button onClick={() => dispatch(addToCart(selectedProduct))}>
          Add to  Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
