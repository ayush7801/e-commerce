import { useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

let cartItems = [
  {
    productId: "fyugh",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
    name: "Macbook",
    price: 200005,
    quantity: 1,
    stock: 10
  }
];
const subtotal = 4000;
const shippingCharges = 100;
const tax = Math.round(subtotal * 0.18);
const discount = 100;
const total = subtotal + shippingCharges + tax - discount;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0 ? cartItems.map((cartItem) => <CartItem cartItem={cartItem} />) : <h1>No items Added</h1>
        }
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Taxes: ₹{tax}</p>
        <p>Discount: -<em className="red">₹{discount}</em></p>
        <p><b>Total: ₹{total}</b></p>
        <input type="text" placeholder="Coupon Code..." value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
        {
          couponCode && (isValidCouponCode? 
          <span className="green">₹{discount} off using the <code>{couponCode}</code></span> : 
          <span className="red">Invalid Coupon <VscError /></span>)
        }
        {cartItems.length > 0 && <Link to='/shipping'>Checkout</Link>}
      </aside>
    </div>
  )
}

export default Cart