import { useDispatch, useSelector } from "react-redux"
import { updateQuantity, removeFromCart, clearCart } from "./cartSlice";
import { Link } from "react-router-dom";

const CartView = () => {
  
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.carts);

  const grandTotal = items.reduce((total, item) => {
    const itemPrice = Number(item.product.price) || 0;
    return total + itemPrice * item.quantity;
  }, 0);

  if (items.length === 0) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl font-semibold text-(--color-text-main)">Your Shopping Cart is empty.</h2>
            <Link to="/" className="bg-(--color-secondary) text-(--color-on-primary) py-2 px-4 rounded-md hover:bg-(--color-secondary-hover)">Go Shopping</Link>
        </div>
    )
  }
  

  return (
    <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
    
        <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex flex-col gap-4 md:flex-2">            
         
                <div className="flex flex-col bg-(--color-surface) divide-y divide-gray-300 border border-(--color-border-subtle) p-4 rounded-xl shadow-2xl">
                    {items.map(item => {
                        const { id, title, price, image_url } = item.product;
                        const subTotal = (Number(price) * item.quantity).toFixed(2);
                        return (
                            <div key={id} className="flex gap-4 py-2">
                                <img src={image_url} alt={title} className="w-20 aspect-square object-cover shrink-0"/>
                                <div className="flex-1 flex flex-col gap-1 lg:gap-6 lg:flex-row lg:items-center">
                                    <div>
                                        <h3 className="font-bold lg:text-lg">{title}</h3>
                                        <p className="text-(--color-text-muted)">${price}</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex items-center border border-(--color-border-subtle) rounded-md gap-4 px-4">
                                            <button onClick={() => dispatch(updateQuantity({ id, amount: item.quantity - 1}))} className="py-1 hover:cursor-pointer">-</button>
                                            <span className="font-medium">{item.quantity}</span>
                                            <button onClick={() => dispatch(updateQuantity({ id, amount: item.quantity + 1}))} className="py-1 hover:cursor-pointer">+</button>
                                        </div>
                                        <button className="text-sm text-(--color-primary) hover:cursor-pointer" onClick={() => dispatch(removeFromCart(id))}>Remove</button>
                                    </div>
                                    <p className="font-semibold shrink-0">Total: ${subTotal}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => dispatch(clearCart())} className="bg-(--color-secondary) border border-(--color-secondary) text-(--color-on-primary) py-2 rounded-xl shadow-lg hover:cursor-pointer hover:bg-(--color-secondary-hover)">
                    Clear Cart
                </button>
            </div>

            <aside className="flex flex-col gap-4 bg-(--color-surface) border border-(--color-border-subtle) p-4 rounded-xl shadow-2xl md:flex-1 h-fit">
                <h2 className="text-2xl text-center font-bold">Order Summary</h2>
                <hr />
                <div>
                    <span>Items Count: </span>
                    <span>
                        {items.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                </div>
                <hr />
                <div className="font-semibold">
                    <span>Total Amount: </span>
                    <span>${grandTotal.toFixed(2)}</span>
                </div>
                <button className="bg-(--color-primary) text-(--color-on-primary) py-2 border border-(--color-primary) rounded-xl hover:cursor-pointer hover:bg-(--color-primary-hover)">Proceed to Checkout</button>
            </aside>
        </div>
    </section>
  )
}

export default CartView
