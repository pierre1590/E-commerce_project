import "./Product.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Counter from "../Counter/Counter";

export default function Product({ data }) {
  const [quantity,setQuantity] = useState(1);
 

  
  return (
  <>
    <div className="product">
      <div className="product__name">{data.name} </div>
      <div className="product__price">Price: € {data.price}</div>
      <div>
            <Counter data={data} />
      </div>
      <AddToCartButton  data={data} quantity={quantity} setQuantity={setQuantity}/>
      <Link to={`/product/${data.id}`}>
        <button className="btn_info">More info...</button>
      </Link>
    </div>
  </>
  );
}
