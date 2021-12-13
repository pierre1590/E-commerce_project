
import "./AddToCartButton.css";
import { useContext } from "react";
import {CartContext} from "../../context/CartContext";
import api from "../../util/api";

const AddToCartButton = (data,quantity,setQuantity) => {
    const{cart,updateCart} = useContext(CartContext);
    const isInCart = cart.findIndex(item => item.id === data.id) >= 0;
    
    const handleAdd = async () => {
        if(isInCart){
           //Inserire updateCart

        }else{
        try {
             await api.addToCart(`${data.id}`,{quantity});  
             updateCart();
        } catch (error) {
            console.warn(error);
        }
    }
}
    
  return ( 
        <button 
            className="add_ToCart"
            onClick={(e)=>handleAdd()}
            >
                Add to cart
            </button>
    );
};

export default AddToCartButton;
