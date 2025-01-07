import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsChatDots } from 'react-icons/bs';

const Header = ({ onFeaturesClick, onDownloadClick, onAboutClick }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="white"
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className=" shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          <img src="/images/logo1.jpg" height={70} width={70} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="border-0 shadow-none"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              className="my-2 my-lg-0 mx-lg-2 text-center"
              onClick={() => {
                onFeaturesClick();
                setExpanded(false);
              }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              className="my-2 my-lg-0 mx-lg-2 text-center"
              onClick={() => {
                onDownloadClick();
                setExpanded(false);
              }}
            >
              Download
            </Nav.Link>
            <Nav.Link
              className="my-2 my-lg-0 mx-lg-2 text-center"
              onClick={() => {
                onAboutClick();
                setExpanded(false);
              }}
            >
              About Us
            </Nav.Link>
            <div className="d-grid d-lg-block mt-3 mt-lg-0">
              <Button
                className="px-4 py-2 w-100 w-lg-auto"
                style={{
                  backgroundColor: '#F7C94B',
                  border: 'none',
                  color: 'white',
                  borderRadius: '5px',
                  gap: '10px',
                }}
                onClick={() => setExpanded(false)}
              >
                <BsChatDots style={{ marginRight: '5px' }} />
                Send Feedback
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
