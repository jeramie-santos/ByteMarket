import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {

  const { items } = useSelector((state) => state.carts);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex justify-between border-2 py-8 px-4">
        <div>
          <Link to="/">
            <strong>ByteMarket</strong>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link to="/">Shop</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>
    </header>
  )
}

export default Navbar
