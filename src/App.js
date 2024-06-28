import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menus from './components/Menus';
import Heropage from './components/Heropage';
import Example from './components/Example';
import Footer from './components/Footer';
import Home from './Pages/Home';
import CheckoutPage from './components/Checkout';
import Contact from './components/Contact';
import HomeNavbar from './components/HomeNavbar';



function App() {

    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };



    return (
        <BrowserRouter>
        <HomeNavbar />
            <Routes>
               <Route path="/home" element={<><Heropage /><Example /><Footer /></>} />
                <Route path="/about" element={<><Example /><Footer /></>} />
                <Route path="/menu" element={<><Menus handleAddToCart={handleAddToCart} /><Footer /></>} />
                <Route path="/contact" element={<><Contact /><Footer /></>} />
                <Route path="/checkout" element={<CheckoutPage />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;
