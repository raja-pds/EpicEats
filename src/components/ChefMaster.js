import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/about.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';

const ChefMaster = () => {
  return (
    <div className='chef-card'>
      <Row>
        <Col lg={4} md={12} sm={12}>
          <div className='team-card w-100'>
            <img src={c1} className='team-img w-100' alt='Chef Paul Trueman' />
            <div className='card-content'>
              <h1 style={{ textAlign: 'center' }}>Paul Trueman</h1>
              <p style={{ textAlign: 'center' }}>Master Chef</p>
              <hr className='card-underline' />
              <div className='social-icons'>
                <FaFacebookF className='icons' />
                <FaInstagram className='icons' />
                <FaTwitter className='icons' />
                <FaYoutube className='icons' />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div className='team-card w-100'>
            <img src={c2} className='team-img w-100' alt='Chef Oscar Oldman' />
            <div className='card-content'>
              <h1 style={{ textAlign: 'center' }}>Oscar Oldman</h1>
              <p style={{ textAlign: 'center' }}>Master Chef</p>
              <hr className='card-underline' />
              <div className='social-icons'>
                <FaFacebookF className='icons' />
                <FaInstagram className='icons' />
                <FaTwitter className='icons' />
                <FaYoutube className='icons' />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div className='team-card w-100'>
            <img src={c1} className='team-img w-100' alt='Chef Emma Newman' />
            <div className='card-content'>
              <h1 style={{ textAlign: 'center' }}>Emma Newman</h1>
              <p style={{ textAlign: 'center' }}>Master Chef</p>
              <hr className='card-underline' />
              <div className='social-icons'>
                <FaFacebookF className='icons' />
                <FaInstagram className='icons' />
                <FaTwitter className='icons' />
                <FaYoutube className='icons' />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ChefMaster;
