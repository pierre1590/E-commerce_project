import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import NavBar from "./components/NavBar/NavBar";
import Context from "./context/CartContext";

function App() {


  return (
   <>
   <Context>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product/:id" element={<Product />} />

          <Route path="*" element={<NotFound />} />
        
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/checkout" element={<Checkout />} />
       
        </Routes>
      </BrowserRouter>
      </Context>
   </>
  );
}

export default App;
