import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const {id, title, price, image_url } = product;
  
  return (
    <Link to={`/product/${id}`} className="border p-2">
      <img src={image_url} alt={title} className="w-full h-48 object-cover mb-2"/>
      <p>{title}</p>
      <p>{price}</p>
    </Link>
  )
}

export default ProductCard
