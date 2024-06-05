import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/checkout.css'; // Import the CSS file for custom styles

const CheckoutPage = () => {
  // useLocation hook to access the state passed via navigation
  const location = useLocation();
  const { items, totalPrice } = location.state; // Destructure items and totalPrice from location state

  // Calculate total quantity of items
  const totalQuantity = items.reduce((total, item) => total + item.count, 0);

  return (
    // Main container for the checkout page
    <Container className="checkout-container">
      {/* Header for the checkout page */}
      <h1 className="checkout-header">Checkout</h1>
      
      {/* Display the total price and quantity */}
      <h2>Total Price: {totalPrice}</h2>
      <h3>Total Quantity: {totalQuantity}</h3>
      
      {/* Table to display item details */}
      <Table striped bordered hover className='mt-4'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{`$${(parseFloat(item.price.slice(1)) * item.count).toFixed(2)}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      
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
                <p>Quantity: {item.count}</p>
                <p>Subtotal: {`$${(parseFloat(item.price.slice(1)) * item.count).toFixed(2)}`}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CheckoutPage;
