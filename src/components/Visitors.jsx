import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/about.css';

const Visitors = () => {
  return (
    <div className='visitors-section'>
      <Row>
        <Col lg={3} md={6} sm={12} className="text-center">
          <div className='p-lg-5 p-md-1 p-3'>
            <h1>200+</h1>
            <p>VISITORS DAILY</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className="text-center">
          <div className='p-lg-5 p-md-1 p-3'>
            <h1>400+</h1>
            <p>DELIVERIES MONTHLY</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className="text-center">
          <div className='p-lg-5 p-md-1 p-3'>
            <h1>100+</h1>
            <p>POSITIVE FEEDBACK</p>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className="text-center">
          <div className='p-lg-5 p-md-1 p-3'>
            <h1>40+</h1>
            <p>AWARDS AND HONORS</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Visitors;
