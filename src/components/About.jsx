import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import about from '../assets/about.jpg';
import '../styles/about.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <Row>
      <Col lg={6} md={12} sm={12}>
        <div className='aboutimg'>
          <img src={about} alt='about' className='w-100' />
          <a href='https://youtu.be/SXJqEnauNaY' target='_blank' className='video-link'>
            <MdOutlineSlowMotionVideo className='video-icon' />
          </a>
        </div>
      </Col>
      <Col lg={6} md={12} sm={12}>
        <div className='aboutcontent p-lg-5 p-md-1 p-1'>
          <h4>About Us</h4>
          <h1>We invite you to visit our restaurant</h1>
          <p>Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentium.</p>
          <button className='read' onClick={() => navigate('/contact')} >Read more</button>
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
