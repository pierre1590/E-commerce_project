import "./Product.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Counter from "../Counter/Counter";

export default function Product({ data }) {
  return (
  <>
    <div className="product">
      <div className="product__name">{data.name} </div>
      <div className="product__price">Price: € {data.price}</div>
      <div>
            <Counter data={data} />
      </div>
      <AddToCartButton  data={data}/>
      <Link to={`/product/${data.id}`}>
        <button className="btn_info">More info...</button>
      </Link>
    </div>
  </>
  );
}
