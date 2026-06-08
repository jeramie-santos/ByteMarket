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
        <div>
            <h2>Your Shopping Cart is empty</h2>
            <Link to="/">Go Shopping</Link>
        </div>
    )
  }
  

  return (
    <div className="flex flex-col gap-4 border border-blue-500">
        <h2>Your Cart</h2>
        <div>
            <div className="flex flex-col divide-y divide-gray-500 ">
                {items.map(item => { 
                    const { id, title, price, image_url } = item.product;
                    const subTotal = (Number(price) * item.quantity).toFixed(2);

                    return (
                        <div key={id} className="flex py-2">
                            <div className="flex gap-4">
                                <img src={image_url} alt={title} width={80}/>
                                <div className="flex flex-col gap-1">
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{price}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <button onClick={() => dispatch(updateQuantity({ id, amount: item.quantity - 1}))} className="bg-blue-200 flex-1">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(updateQuantity({ id, amount: item.quantity + 1}))} className="bg-blue-200 flex-1">+</button>
                                        <button className="bg-red-100" onClick={() => dispatch(removeFromCart(id))}>Remove</button>
                                    </div>
                                    <div>
                                        <p>Total: ${subTotal}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button onClick={() => dispatch(clearCart())}>
                    Clear Cart
                </button>
            </div>
            <div>
                <h2>Order Summary</h2>
                <div>
                    <span>Items Count: </span>
                    <span>
                        {items.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                </div>
                <div>
                    <span>Total Amount</span>
                    <span>${grandTotal.toFixed(2)}</span>
                </div>
                <button className="bg-blue-400">Proceed to Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CartView
