import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/HomeNavbar';
import Menus from './components/Menus';
import Heropage from './components/Heropage';
import Example from './components/Example';
import Footer from './components/Footer';
import Home from './Pages/Home';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <BrowserRouter>
        <HomeNavbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<><Heropage /><Example /><Footer /></>} />
        <Route path="/about" element={<Example />} />
        <Route path="/menu" element={<><Menus handleAddToCart={handleAddToCart} /><Footer /></>} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
