import {useState} from 'react';

const Counter = ({data}) => {
    //Set up the value of the counter to 0
    const [count, setCount] = useState(1);
    const [min,setMin] = useState(1);
    

  // Function to increment the counter and if the max value reaches the quantity it shows a message
    const increment = () => {
        if(count < data.available){
            setCount(count + 1);
        }else{
            alert("You can't add more than "+ data.available+ " products. \nAvailability terminated.");
        }
    }
  

  //Function to decrement the counter until the min and show a message if the counter is less than the min
    const decrement = () => {
        if(count > min){
            setCount(count - 1);
        }else{
            alert('Reached minimum quantity of products to add to the cart');
        }
    }



 


  return (
    <>
      <button 
        className="btn_counter" 
        onClick={decrement}
        >
        -
      </button>
       <input
       style={{width: '50px',textAlign: 'center'}}
        value={count}
        type="text"
        className="input_counter"
        />
      <button 
        className="btn_counter" 
        onClick={increment}
        >
        +
      </button>
    </>
  );
};

export default Counter;
