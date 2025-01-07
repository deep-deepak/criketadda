import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Phone number submitted:', phoneNumber);
  };

  return (
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center min-vh-75">
          {/* Left Column - Text Content */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold mb-4" style={{ color: '#1a1a1a' }}>
            Step Into <br/> the Game of Champions!
            </h1>
            <p className="lead mb-5" style={{ color: '#666', maxWidth: '540px' }}>
            Join the ultimate platform for fantasy sports enthusiasts. Showcase your cricket expertise, strategize like a pro, and compete with fans worldwide to claim your glory!
            </p>
            
            <div className="get-started">
              <h2 className="h3 mb-4">Get Started Today</h2>
              <Form onSubmit={handleSubmit} className="d-flex gap-2" style={{ maxWidth: '400px' }}>
                <Form.Control
                  type="tel"
                  placeholder="Enter your Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-grow-1"
                  style={{ 
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    padding: '12px 16px'
                  }}
                />
                <Button 
                  type="submit"
                  style={{
                    backgroundColor: '#7C5CFC',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 24px'
                  }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>

          {/* Right Column - Phone Mockup */}
          <Col lg={6} className="position-relative">
            <div className="position-relative">
              {/* Yellow Circle Background */}
              <div 
                className="position-absolute"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: '#FFD700',
                  borderRadius: '50%',
                  opacity: '0.2',
                  right: '-100px',
                  top: '-50px',
                  zIndex: 0
                }}
              />
              
              {/* Phone Image */}
              <img
                src="/images/hero_banner.png"
                alt="Total Play Field App Interface"
                className="img-fluid phone-mockup"
                style={{
                  maxWidth: '375px',
                  height: 'auto',
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          @media (max-width: 991.98px) {
            .hero-section {
              text-align: center;
              padding-top: 3rem;
            }
            
            .lead {
              margin-left: auto;
              margin-right: auto;
            }
            
            .get-started form {
              margin: 0 auto;
            }
            
            .phone-mockup {
              margin-top: 3rem;
              max-width: 280px;
              margin-left: auto;
              margin-right: auto;
            }
          }
          
          @media (min-width: 992px) {
            .hero-section {
              padding-top: 5rem;
              padding-bottom: 5rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;