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
        <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl font-semibold text-(--color-text-muted)">Your Shopping Cart is empty.</h2>
            <Link to="/" className="bg-(--color-secondary) text-(--color-on-primary) py-2 px-4 rounded-md">Go Shopping</Link>
        </div>
    )
  }
  

  return (
    //parent container
    <section className="flex flex-col gap-4">
        <h2 className="text-2xl">Your Cart</h2>
        
        
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-4 md:flex-1">
                
         
                <div className="flex flex-col bg-(--color-surface) divide-y divide-gray-300 border border-(--color-border-subtle) p-4 rounded-xl shadow-2xl">
                    {items.map(item => {
                        const { id, title, price, image_url } = item.product;
                        const subTotal = (Number(price) * item.quantity).toFixed(2);
                        return (
                            <div key={id} className="flex py-2">
                                <div className="flex-1 flex gap-4">
                                    <img src={image_url} alt={title} className="w-20 aspect-square object-cover shrink-0"/>
                                    <div className="flex-1 flex flex-col gap-1">
                                        <div>
                                            <h3 className="font-semibold">{title}</h3>
                                            <p className="text-(--color-text-muted)">${price}</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <button onClick={() => dispatch(updateQuantity({ id, amount: item.quantity - 1}))} className="bg-(--color-primary) text-(--color-on-primary) rounded-md flex-1 py-1">-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => dispatch(updateQuantity({ id, amount: item.quantity + 1}))} className="bg-(--color-primary) text-(--color-on-primary) rounded-md flex-1 py-1">+</button>
                                            <button className="text-sm" onClick={() => dispatch(removeFromCart(id))}>Remove</button>
                                        </div>
                                        <div>
                                            <p className="">Total: ${subTotal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button onClick={() => dispatch(clearCart())} className="bg-(--color-secondary) text-(--color-on-primary) py-2 rounded-lg shadow-lg">
                    Clear Cart
                </button>
            </div>

           
            <div className="flex flex-col gap-2 bg-(--color-surface) border border-(--color-border-subtle) p-4 rounded-xl shadow-2xl md:flex-1">
                <h2 className="text-2xl text-center">Order Summary</h2>
                <div>
                    <span>Items Count: </span>
                    <span>
                        {items.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                </div>
                <div className="font-semibold">
                    <span>Total Amount: </span>
                    <span>${grandTotal.toFixed(2)}</span>
                </div>
                <button className="bg-(--color-primary) text-(--color-on-primary) py-2 rounded-md">Proceed to Checkout</button>
            </div>
        </div>
    </section>
  )
}

export default CartView
