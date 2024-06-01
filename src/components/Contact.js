import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';
import writeImage from '../assets/write.svg';
import callImage from '../assets/call.svg';
import visitImage from '../assets/visit.svg';

const Contact = () => {

  return (
    <>
      <div className='contactback'>
        <Container fluid>
          <div className='center'>
            {/* Contact Header Section */}
            <div className='contact-header p-lg-5 p-5 p-md-3'>
              <div className='bg-white contactcontent'>
                <h5>HAVE A QUESTIONS?</h5>
                <h1>Contact Us</h1>
                <p>Quaerat debitis, vel, sapiente dicta sequi labore porro pariatur harum expedita.</p>
                <Row>
                  {/* Contact Card: Write Us */}
                  <Col lg={4} md={12} sm={12}>
                    <div className='call-card p-lg-5 p-md-3'>
                      <img src={writeImage} alt='Write' className='feature-icon' />
                      <div className='p-lg-4 p-md-4 p-3'>
                        <h2>Write Us</h2>
                        <p>info@tastyc.com <br />
                          reservation@tastyc.com</p>
                      </div>
                    </div>
                  </Col>
                  {/* Contact Card: Call Us */}
                  <Col lg={4} md={12} sm={12}>
                    <div className='call-card p-lg-5 p-md-3'>
                      <img src={callImage} alt='Call' className='feature-icon' />
                      <div className='p-lg-4 p-md-4 p-3'>
                        <h2>Call Us</h2>
                        <p>+76 (094) 754 43 71 <br />
                          +76 (093) 753 43 72</p>
                      </div>
                    </div>
                  </Col>
                  {/* Contact Card: Visit Us */}
                  <Col lg={4} md={12} sm={12}>
                    <div className='call-card p-lg-5 p-md-3'>
                      <img src={visitImage} alt='Visit' className='feature-icon' />
                      <div className='p-lg-4 p-md-4 p-3'>
                        <h2>Visit Us</h2>
                        <p>Canada, Toronto, North Avenue 31B</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <hr className='separateline' />
                {/* Contact Form Section */}
                <div className='contactform'>
                  <h5>Contact</h5>
                  <h1>Write Us a Message</h1>
                  <p>Porro eveniet, autem ipsam vitae consequatur!</p>
                  <Form>
                    <Row>
                      {/* First Name Input */}
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Enter your first name'
                            name='firstName'
                          />
                        </Form.Group>
                      </Col>
                      {/* Last Name Input */}
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Enter your last name'
                            name='lastName'
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      {/* Phone Number Input */}
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type='text'
                            placeholder='Enter your phone number'
                            name='phone'
                          />
                        </Form.Group>
                      </Col>
                      {/* Email Input */}
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type='email'
                            placeholder='Enter your email'
                            name='email'
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* Message Input */}
                    <Form.Group className='mb-3'>
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as='textarea'
                        rows={5}
                        placeholder='Write your message'
                        name='message'
                      />
                    </Form.Group>
                    {/* Submit Button */}
                    <div className='text-center'>
                      <Button variant='primary' type='submit'>
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
