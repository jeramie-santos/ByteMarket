const ProductCard = ({ product }) => {

  const { title, price, image_url } = product;

  console.log(title);
  

  return (
    <div className="border p-2">
      <img src={image_url} alt={title} className="w-full h-48 object-cover mb-2"/>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  )
}

export default ProductCard
