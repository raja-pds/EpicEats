import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/checkout.css'; // Import the CSS file for custom styles

const CheckoutPage = () => {
  // useLocation hook to access the state passed via navigation
  const location = useLocation();
  const { items, totalPrice } = location.state; // Destructure items and totalPrice from location state

  return (
    // Main container for the checkout page
    <Container className="checkout-container">
      {/* Header for the checkout page */}
      <h1 className="checkout-header">Checkout</h1>
      {/* Display the total price */}
      <h2>Total Price: {totalPrice}</h2>
      
      {/* Bootstrap row to hold all the items */}
      <Row>
        {items.map((item, index) => (
          // Column for each item, responsive layout
          <Col key={index} lg={3} md={6} sm={12} className='checkout-item'>
            {/* Card for each item */}
            <Card className='h-100'>
              {/* Image of the item */}
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                {/* Item name */}
                <Card.Title>{item.name}</Card.Title>
                {/* Price and count of the item */}
                <p>Price: {item.price}</p>
                <p>Count: {item.count}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CheckoutPage;
