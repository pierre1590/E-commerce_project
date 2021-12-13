import {createContext,useState,useEffect} from 'react';
import api from "../util/api";


export const CartContext = createContext();

export default function Context ({children}) {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        updateCart();
    }, []);
       
        

    const updateCart = async () => {
        try {
            const res = await api.getCart();
            setCart(res.data.products);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CartContext.Provider value={{cart,updateCart}} >
            {children}
        </CartContext.Provider>
    );
    }
