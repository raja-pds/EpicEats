import React from 'react';
import { Row, Col } from 'react-bootstrap';
import menu from '../assets/menu.svg';
import incrediants from '../assets/incrediants.svg';
import '../styles/about.css';
import cook from '../assets/cook.svg';

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <div className='feature-content p-lg-3 p-5 p-md-3'>
        <h5>Features</h5>
        <h1>Why people Choose Us?</h1>
        <p>Porro eveniet, autem ipsam vitae consequatur!</p>
        <Row>
          {/* Feature Card: Menu for every taste */}
          <Col lg={4} md={12} sm={12}>
            <div className='receipe-card p-lg-5 p-md-3'>
              <img src={menu} alt='menu' className='feature-icon' />
              <div className='p-lg-4 p-md-4 p-3'>
                <h2>Menu for every taste</h2>
                <p>Dolor sit amet, consectetur adipisicing elit et molestias possimus.</p>
              </div>
            </div>
          </Col>
          {/* Feature Card: Fresh ingredients */}
          <Col lg={4} md={12} sm={12}>
            <div className='receipe-card p-lg-5 p-md-3'>
              <img src={incrediants} alt='incrediants' className='feature-icon' />
              <div className='p-lg-4 p-md-4 p-3'>
                <h2>Fresh ingredients</h2>
                <p>Assumenda possimus eaque illo iste, autem. Porro eveniet autem.</p>
              </div>
            </div>
          </Col>
          {/* Feature Card: Experienced chefs */}
          <Col lg={4} md={12} sm={12}>
            <div className='receipe-card p-lg-5 p-md-3'>
              <img src={cook} alt='cook' className='feature-icon' />
              <div className='p-lg-4 p-md-4 p-3'>
                <h2>Experienced chefs</h2>
                <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Features;
