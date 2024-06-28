import React from 'react';
import '../styles/homenavbar.css'; // Importing the component styles
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook for navigation
import Carousel from 'react-bootstrap/Carousel'; // Importing the Carousel component from react-bootstrap
import bg1 from '../assets/bg1.jpg'; // Importing background images
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg'

function Heropage() {
  const navigate = useNavigate(); // Initializing the useNavigate hook

  return (
    <>
      {/* Carousel component for image slider */}
      <Carousel>
        {/* First carousel item */}
        <Carousel.Item interval={1000}>
          {/* Image for the carousel item */}
          <img src={bg3} className='w-100 hero-image' alt="Background 1" />
          {/* Carousel caption */}
          <Carousel.Caption>
            {/* Content inside the caption */}
            <div className='img-content'>
              <h4>Hello, New friend</h4>
              <h1>Visit to our Online shop</h1>
              <p>Explore our extensive selection online and visit our shop today!</p>
              {/* Button to navigate to the menu page */}
              <button className='find-us' onClick={() => navigate('/menu')}>Find Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Second carousel item */}
        <Carousel.Item interval={500}>
          <img src={bg3} className='w-100 hero-image' alt="Background 2" />
          <Carousel.Caption>
            <div className='img-content'>
              <h4>Hello, New friend</h4>
              <h1>Visit to our Online shop</h1>
              <p>Explore our extensive selection online and visit our shop today!</p>
              <button className='find-us' onClick={() => navigate('/menu')}>Find Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Third carousel item */}
        <Carousel.Item>
          <img src={bg3} className='w-100 hero-image' alt="Background 3" />
          <Carousel.Caption>
            <div className='img-content'>
              <h4>Hello, New friend</h4>
              <h1>Visit to our Online shop</h1>
              <p>Explore our extensive selection online and visit our shop today!</p>
              <button className='find-us' onClick={() => navigate('/menu')}>Find Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Heropage;