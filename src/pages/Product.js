import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton/AddToCartButton";
import api from "../util/api";
import Counter from "../components/Counter/Counter";
import {FaShoppingCart} from "react-icons/fa";


export default function Product() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getProduct(id);

        console.log("product", res);

        setData(res.data);
      } catch (err) {
        if (err.response) {
          console.warn("response error", err.response);
        } else {
          console.error("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Function to add product to cart with api call
  const addToCart = async (product) => {
    try {
      const res = await api.addToCart(product);

      console.log("add to cart", res);
    } catch (err) {
      if (err.response) {
        console.warn("response error", err.response);
      } else {
        console.error("An error occurred");
      }
    }
  };

  return (
    <>
      {loading ? (
        "Loading"
      ) : data ? (
        <>
          <div className="product_detail" style={{ textAlign: "center" }}>
            <h1>{data.name}</h1>
            <p>Price: €{data.price}</p>
            <p>Availability : {data.available}</p>
            <p>
              <Counter data={data} />
              <AddToCartButton data={data} />
              <Link to="/cart">
                <button className="btn-cart">
                  <FaShoppingCart />                  
                  Cart
                </button>
              </Link>
            </p>
          </div>
        </>
      ) : (
        <h1 style={{ textAlign: "center" }}>Product not found</h1>
      )}
    </>
  );
}
