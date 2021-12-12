import './NavBar.css';
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <button className="btn-home">
          <FaHome /> Home
        </button>
      </Link>

      <Link to="/cart">
        <button className="cart-icon">
          <FaShoppingCart />
          <div className="item_count">
            <span></span>
          </div>
        </button>
      </Link>
      <Link to="/login">
        <button className="btn-login">
          <MdLogin /> Login
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
