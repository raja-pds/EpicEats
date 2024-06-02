import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook for navigation
import footerlogo from '../assets/footerlogo.png'; // Importing the footer logo image
import '../styles/footer.css'; // Importing the footer styles
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Importing social media icons

function Footer() {
  const navigate = useNavigate(); // Initializing the useNavigate hook

  return (
    <div className='backimg'> {/* Background image container */}
      <Container fluid>
        {/* Logo and social icons row */}
        <Row className='p-lg-5 p-md-5 p-2 align-items-center'>
          <Col lg={6} md={6} sm={6} xs={6} className='text-start'>
            <img src={footerlogo} className='logo' alt='Footer Logo' /> {/* Footer logo */}
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} className='text-end'>
            <div className='footer-icons'>
              {/* Social media icons */}
              <FaFacebookF className='icon' />
              <FaInstagram className='icon' />
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
            </div>
          </Col>
        </Row>
        <hr className='underline' /> {/* Horizontal line */}
        {/* Footer content */}
        <div className='footer-final p-lg-5 p-md-4 p-3'>
          <Row>
            {/* About Us section */}
            <Col lg={4} md={12} sm={12}>
              <h2>About Us</h2>
              <div className='footer-final-div'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur fugiat maiores id magni, modi, quaerat vitae. Consectetur adipisicing elit.</p>
                <h4 onClick={() => navigate('/menu')} style={{ cursor: 'pointer' }}>Our Menu</h4> {/* Clickable link */}
              </div>
            </Col>
            {/* Contact info section */}
            <Col lg={4} md={12} sm={12}>
              <h2>Contact info</h2>
              <Row>
                <Col xs={4} className='text-md-start'>
                  <p>Call:</p>
                  <p>Write:</p>
                  <p>Find:</p>
                </Col>
                <Col xs={8} className='text-md-end'>
                  <p>+76 (094) 754 43 7I</p>
                  <p>your.email.inbox@here.com</p>
                  <p>Canada, Toronto, North Avenue 31B</p>
                </Col>
              </Row>
              <h4 onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact Us</h4> {/* Clickable link */}
            </Col>
            {/* Gallery section */}
            <Col lg={4} md={12} sm={12}>
              <h2>Gallery</h2>
              <div className='footer-final-div'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repudiandae neque illum aspernatur fugiat maiores id magni, modi, quaerat vitae. Consectetur adipisicing elit.</p>
                <h4 onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>See more</h4> {/* Clickable link */}
              </div>
            </Col>
          </Row>
          <hr className='underline' /> {/* Horizontal line */}
          {/* Footer made section */}
          <div className='footer-made'>
            <Row className='align-items-center'>
              <Col lg={6} md={6} sm={6} className='text-start'>
                <p>© 2024 Tastycs. All rights reserved</p>
              </Col>
              <Col lg={6} md={6} sm={6} className='text-end text-sm-end d-flex justify-content-sm-end'>
                <p onClick={() => navigate('/home')} style={{ cursor: 'pointer', color: 'yellow' }}>BACK TO TOP</p> {/* Clickable link */}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
