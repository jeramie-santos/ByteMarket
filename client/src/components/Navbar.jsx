import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from "../hooks/ThemeToggle";

const Navbar = () => {

  const navActive = "text-(--color-primary)";

  const { items } = useSelector((state) => state.carts);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 py-8 px-4 flex justify-between bg-(--color-surface) shadow-lg lg:px-40">
        <div>
          <Link to="/">
            <span className="text-(--color-primary) text-2xl font-extrabold tracking-tight">Byte</span>
            <span className="text-(--color-secondary) text-2xl font-extrabold tracking-tight">Market</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6 lg:gap-8 font-medium tracking-wide text-(--color-text-main)">
          <NavLink to="/" className={({ isActive }) => `${isActive ? navActive : "hover:text-(--color-primary) transition-colors duration-200" }`}>Shop</NavLink>
          <NavLink to="/cart" className={({ isActive }) => `group flex gap-1 items-center ${isActive ? navActive : "hover:text-(--color-primary) transition-colors duration-200"}`}>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span className="bg-(--color-primary) text-(--color-on-primary) text-sm font-bold w-5 h-5 flex justify-center items-center rounded-full transition-transform group-hover:scale-110"> {totalItems}</span>
          </NavLink>
          <ThemeToggle />
        </nav>
    </header>
  )
}

export default Navbar
