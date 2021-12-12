import {useEffect,useState} from 'react';
import api from "../util/api";



const Checkout = () => {
    // Set up cart to be empty
    const [cart, setCart] = useState([]);  
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState('');
    const [isSuccessMessage, setIsSuccessMessage] = useState('Thank you for placing your order, it will be processed as soon as possible.');


useEffect(() => {
    // Get cart from api with async/await
    async function getCart() {
        try {
            const response = await api.get('/checkout');
            setCart(response.data);
        } catch (error) {
            setIsError(true);
            setIsErrorMessage(error.message);
        }
    }
    getCart();
}, []);

console.log(cart);



    return (
        <div>
        <h1>Checkout</h1>
            <p className="success-order">{isSuccessMessage}</p>
        </div>
    );
}

export default Checkout;