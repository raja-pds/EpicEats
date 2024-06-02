import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import about from '../assets/about.jpg';
import '../styles/about.css';

const About = () => {
  // Use the useNavigate hook from react-router-dom to navigate programmatically
  const navigate = useNavigate();

  return (
    // Use Bootstrap's Row and Col for responsive layout
    <Row>
      {/* Left column for the image */}
      <Col lg={6} md={12} sm={12}>
        <div>
          <img src={about} alt='about' className='w-100' />
        </div>
      </Col>
      
      {/* Right column for the content */}
      <Col lg={6} md={12} sm={12}>
        <div className='aboutcontent p-lg-5 p-md-1 p-1'>
          {/* Section title and description */}
          <h4>About Us</h4>
          <h1>We invite you to visit our restaurant</h1>
          <p>Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium.</p>
          
          {/* Button to navigate to the contact page */}
          <button className='read' onClick={() => navigate('/contact')} >Read more</button>
          
          {/* Social media icons */}
          <FaFacebookF className='icons' />
          <FaInstagram className='icons' />
          <FaTwitter className='icons' />
          <FaYoutube className='icons' />
        </div>
      </Col>  
    </Row>
  );
}

export default About;
