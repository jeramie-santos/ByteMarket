import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {

  const { items } = useSelector((state) => state.carts);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="py-8 px-4 flex justify-between bg-(--color-surface) z-10 shadow-lg">
        <div>
          <Link to="/">
            <span className="text-(--color-primary) text-2xl font-bold">Byte</span>
            <span className="text-(--color-secondary) text-2xl font-bold">Market</span>
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
