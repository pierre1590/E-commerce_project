
import { Link } from "react-router-dom";

const Cart = () => {
 // Function to remove all products from cart with the api call
  const removeAllProducts = () => {

  return (
    <>
      <h1>Cart</h1>
      <button onClick={clearCart}>Remove all</button>
      <div className="total-cart">Total cart</div>

      <Link to="/checkout" ><button className="cart-checkout">Checkout</button></Link>
    </>
  );
};

export default Cart;
