
import { Link } from "react-router-dom";

const Cart = () => {
 

  return (
    <>
      <h1>Cart</h1>
      <div className="total-cart">Total cart</div>

      <Link to="/checkout" ><button className="cart-checkout">Checkout</button></Link>
    </>
  );
};

export default Cart;
