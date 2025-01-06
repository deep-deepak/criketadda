import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BsChatDots } from "react-icons/bs";


const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)} 
      className="py-2 py-lg-3 shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="fw-bold fs-4"
        >
          <img src='/images/logo.jpg'
          height={60}
          width={60}
          />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          className="border-0 shadow-none"
        />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link 
              href="#features" 
              className="my-2 my-lg-0 mx-lg-2 text-center"
              onClick={() => setExpanded(false)}
            >
              Features
            </Nav.Link>
            <Nav.Link 
              href="#download" 
              className="my-2 my-lg-0 mx-lg-2 text-center"
              onClick={() => setExpanded(false)}
            >
              Download
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className="my-2 my-lg-0 mx-lg-2 text-center"
              onClick={() => setExpanded(false)}
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
                  gap:"10px"
                }}
                onClick={() => setExpanded(false)}
              >
                <BsChatDots style={{marginRight:"5px"}}/>
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

/* Add these custom styles to your CSS file */
const styles = `
@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: 1rem 0;
  }
  
  .nav-link {
    padding: 0.5rem 0;
  }
  
  .navbar-nav {
    padding-top: 1rem;
  }
}

.navbar-toggler:focus {
  box-shadow: none;
}

.nav-link {
  color: #333;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #F7C94B;
}
`;