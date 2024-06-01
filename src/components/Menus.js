import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/menu.css';
import pizza from '../assets/pizza.jpg';
import juice from '../assets/juice.jpg';
import burger from '../assets/burger.jpg';
import chicken from '../assets/chicken.jpg';
import seafood from '../assets/seafood.jpg';
import fishfry from '../assets/fishfry.jpg';
import iral from '../assets/iral.jpg';
import legpiece from '../assets/legpiece.jpg';
import briyani from '../assets/briyani.jpg';
import kiwi from '../assets/kiwi.jpg';
import lemon from '../assets/lemon.jpg';
import pomegrante from '../assets/pomegrante.jpg';
import orieo from '../assets/orieo.jpg';
import papaya from '../assets/papaya.jpg';
import pineapple from '../assets/pineapple.jpg';
import strabeery from '../assets/strabeery.jpg';

const Menus = ({ handleAddToCart }) => {
  const [displayMenu, setDisplayMenu] = useState('mainMenuItems'); // State to toggle between main menu and juice menu


  // Define main menu items and juice items with their names, images, prices, and count
  const [mainMenuItems, setMainMenuItems] = useState([
    { name: 'Pizza', image: pizza, price: '$7.50', count: 0 },
    { name: 'Fish Fry', image: fishfry, price: '$8.00', count: 0 },
    { name: 'Burger', image: burger, price: '$10.00', count: 0 },
    { name: 'Chicken', image: chicken, price: '$12.50', count: 0 },
    { name: 'Seafood', image: seafood, price: '$15.25', count: 0 },
    { name: 'Iral', image: iral, price: '$17.25', count: 0 },
    { name: 'Briyani', image: briyani, price: '$20.00', count: 0 },
    { name: 'Leg Piece', image: legpiece, price: '$15.00', count: 0 }
  ]);

  const [juiceItems, setJuiceItems] = useState([
    { name: 'Juice', image: juice, price: '$5.00', count: 0 },
    { name: 'Kiwi', image: kiwi, price: '$10.00', count: 0 },
    { name: 'Lemon', image: lemon, price: '$7.50', count: 0 },
    { name: 'Papaya', image: papaya, price: '$12.50', count: 0 },
    { name: 'Pomegranate', image: pomegrante, price: '$18.00', count: 0 },
    { name: 'Oreo', image: orieo, price: '$20.00', count: 0 },
    { name: 'Strawberry', image: strabeery, price: '$17.50', count: 0 },
    { name: 'Pineapple', image: pineapple, price: '$22.00', count: 0 }
  ]);
 
  const navigate = useNavigate();  // Hook to navigate to different routes


   // Function to toggle between main menu and juice menu
  const toggleDisplayMenu = (menuType) => {
    setDisplayMenu(menuType);
  };

  // Function to handle adding an item to cart and notify
  const handleAddToCartAndNotify = (menuType, index) => {
    handleAddToCart(); // Call the function passed from parent component to handle adding to cart
    if (menuType === 'mainMenuItems') {
      const newMainMenuItems = [...mainMenuItems];
      newMainMenuItems[index].count += 1;
      setMainMenuItems(newMainMenuItems);
    } else {
      const newJuiceItems = [...juiceItems];
      newJuiceItems[index].count += 1;
      setJuiceItems(newJuiceItems);
    }
  };

  // Function to handle the "Buy Now" button click
  const handleBuyNow = () => {
    const selectedItems = [...mainMenuItems, ...juiceItems].filter(item => item.count > 0); // Filter selected items with count greater than 0
    const totalPrice = selectedItems.reduce((total, item) => total + (parseFloat(item.price.slice(1)) * item.count), 0); // Calculate total price
    navigate('/checkout', { state: { items: selectedItems, totalPrice: `$${totalPrice.toFixed(2)}` } });  // Navigate to checkout page with selected items and total price
  };


  return (
    <div className='menubg w-100'>
      <Container fluid>
        <div className='menucenter'>
          <div className="d-flex justify-content-between align-items-start">
            <h2 className='section-title' onClick={() => toggleDisplayMenu('mainMenuItems')}>Main Menu Items</h2>
            <h2 className='section-title' onClick={() => toggleDisplayMenu('juiceItems')}>Juice Items</h2>
          </div>
          {displayMenu === 'mainMenuItems' && (
            <Row>
              {mainMenuItems.map((item, index) => (
                <Col lg={3} md={6} sm={12} key={index} className='mb-4'>
                  <Card className='h-100'>
                    <Card.Img variant="top" src={item.image} alt={item.name} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <div className='d-flex justify-content-between'>
                        <Button variant="primary" className='me-2'>{item.count}</Button>
                        <button style={{ backgroundColor: 'red', borderRadius: '5px', border: 'none' }} className='me-2'>{item.price}</button>
                        <Button variant='success' className='me-2' onClick={() => handleAddToCartAndNotify('mainMenuItems', index)}>Add to cart</Button>
                        <button type='button' style={{ backgroundColor: 'orange', borderRadius: '5px', border: 'none' }} onClick={handleBuyNow}>Buy Now</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
          {displayMenu === 'juiceItems' && (
            <Row>
              {juiceItems.map((item, index) => (
                <Col lg={3} md={6} sm={12} key={index} className='mb-4'>
                  <Card className='h-100'>
                    <Card.Img variant="top" src={item.image} alt={item.name} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <div className='d-flex justify-content-between'>
                        <Button variant="primary" className='me-2'>{item.count}</Button>
                        <button style={{ backgroundColor: 'red', borderRadius: '5px', border: 'none' }} className='me-2'>{item.price}</button>
                        <Button variant='success' className='me-2' onClick={() => handleAddToCartAndNotify('juiceItems', index)}>Add to cart</Button>
                        <button type='button' style={{ backgroundColor: 'orange', borderRadius: '5px', border: 'none' }} onClick={handleBuyNow}>Buy Now</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Menus;

