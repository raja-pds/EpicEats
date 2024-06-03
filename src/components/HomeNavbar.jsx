import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav components from react-bootstrap
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import logo from '../assets/logo.png'; // Import logo image
import '../styles/homenavbar.css'; // Import component styles
import { MdOutlineShoppingBag } from "react-icons/md"; // Import shopping bag icon

function HomeNavbar({ cartCount }) {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <Navbar expand="lg" className="home-header" sticky='top'> {/* Navbar component */}
      <div className="container-fluid">
        <Navbar.Brand href="#home" className="me-auto"> {/* Brand logo */}
          <img src={logo} alt='logo' width="100px" /> {/* Logo image */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for mobile view */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Collapsible content */}
          <Nav className="mx-auto nav-items nav-size"> {/* Navigation links */}
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex"> {/* Reservation button and shopping cart icon */}
            <button className="reservation-button" onClick={() => navigate('/checkout')} >Reservation</button> {/* Reservation button */}
            <div className='shop-icon-container ms-3'> {/* Container for shopping bag icon */}
              <MdOutlineShoppingBag className='shop-icon' /> {/* Shopping bag icon */}
              {cartCount > 0 && <span className='cart-count'>{cartCount}</span>} {/* Cart count */}
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default HomeNavbar;
 