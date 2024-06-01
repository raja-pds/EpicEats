import React from 'react';
import '../styles/about.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import Features from './Features';
import About from './About';
import ChefMaster from './ChefMaster';
import Time from './Time';
import Visitors from './Visitors';

const Example = () => {
  return (
    <div className='backimg'>
      <Container fluid>
        <div className='center'>
          {/* Main Content Container */}
          <div className='bg-white contentback'>
            <div className='p-lg-4 p-3 p-md-5'>
              {/* About Section */}
              <About />
              <hr className='separateline' />
              
              {/* Features Section */}
              <Features />
              <hr className='separateline' />
              
              {/* ChefMaster Section */}
              <ChefMaster />
              <hr className='separateline' />
              
              {/* Time Section */}
              <Time />
              <hr className='separateline' />
              
              {/* Visitors Section */}
              <Visitors />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Example;
