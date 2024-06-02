import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/about.css';
import { useNavigate } from 'react-router-dom';

const Time = () => {

  const navigate = useNavigate();

  return (
    <div className='time-content'>
      <Row>
        <Col lg={8} md={12} sm={12} className="d-flex align-items-center">
          <div className='time-img w-100'>
            <div className='p-lg-5 p-md-5 p-5 text-center'>
              <h4>ABOUT US</h4>
              <h1>Working hours</h1>
              <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
              <button className='reserve-btn' onClick={() => navigate('/menu')} >Reservation</button>
              <span className='contact-us m-lg-4 m-md-4 d-inline-block '>Contact Us</span>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} sm={12} className="d-flex flex-column align-items-center justify-content-center">
          <div className='p-lg-4 p-md-4 p-4 text-center'>
            <h5>SUNDAY TO TUESDAY</h5>
            <div>
              <h2>09:00</h2>
              <h2>22:00</h2>
            </div>
            <h5>FRIDAY TO SATURDAY</h5>
            <div>
              <h2>11:00</h2>
              <h2>21:00</h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Time;
