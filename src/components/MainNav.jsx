import React from 'react';
import staticImage from '../assets/static.svg'; // Import static image
import '../styles/homenavbar.css'; // Import component styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Row, Col, Container } from 'react-bootstrap'; // Import Row, Col, and Container components from react-bootstrap

const MainNav = () => {
  return (
    <div className='Top-header bg-dark'> {/* Top header container */}
      <Container fluid> {/* Fluid container */}
        <Row> {/* Row */}
          <Col lg="6" md="6" sm="6"> {/* Column for logo */}
            <div>
              <img src={staticImage} alt='svg' width="200px" className='stcimg'/> {/* Static image */}
            </div>
          </Col>
          <Col lg="6" md="6" sm="6"> {/* Column for button */}
            <div>
              <button className='buy'>Buy now</button> {/* Buy now button */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainNav;
