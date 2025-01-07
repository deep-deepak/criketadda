import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiBell, BiLineChart } from 'react-icons/bi';
import { CgSmartphone } from 'react-icons/cg';
import { FaUserSecret } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <CgSmartphone className="icon-gradient" size={40} />,
      title: "User-Friendly Interface",
      description: "Navigate effortlessly through our app and website for a hassle-free experience."
    },
    {
      icon: <FaUserSecret className="icon-gradient" size={40} />,
      title: "Customizable Teams",
      description: "Build your dream team from a wide selection of players and earn points based on performance."
    },
    {
      icon: <BiLineChart className="icon-gradient" size={40} />,
      title: "Expert Insights",
      description: "Access professional tips and analysis to fine-tune your strategy and improve your performance."
    },
    {
      icon: <BiBell className="icon-gradient" size={40} />,
      title: "Instant Notifications",
      description: "Get real-time updates on scores, player stats, and match highlights, all at your fingertips."
    }
  ];

  return (
    <section className="features-section py-5">
      <Container>
        <h2 className="text-center display-4 mb-5">Why Choose Highscoresports?</h2>

        <Row className="align-items-center">
          {/* Left Column - Phone Image */}
          <Col lg={5} className="mb-5 mb-lg-0">
            <div className="position-relative">
              {/* Yellow Circle Background */}
              <div className="position-absolute circle-bg"></div>

              <img
                src="/images/onlinegame1.avif"
                alt="App Interface Preview"
                className="img-fluid phone-image"
              />
            </div>
          </Col>

          {/* Right Column - Features Grid */}
          <Col lg={7}>
            <Row>
              {features.map((feature, index) => (
                <Col md={6} className="mb-4" key={index}>
                  <div className="feature-card p-4">
                    <div className="icon-wrapper mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="h4 mb-3">{feature.title}</h3>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          .features-section {
            background-color: #fff;
          }

          .circle-bg {
            width: 300px;
            height: 300px;
            background: linear-gradient(45deg, #FFD700, #FFB347);
            border-radius: 50%;
            opacity: 0.2;
            z-index: 0;
            left: -50px;
            top: 50%;
            transform: translateY(-50%);
          }

          .phone-image {
            position: relative;
            z-index: 1;
            max-width: 300px;
            margin: 0 auto;
            display: block;
            height:500px;
          }

          .feature-card {
            background: white;
            border-radius: 12px;
            transition: all 0.3s ease;
            height: 100%;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .icon-gradient {
            background: linear-gradient(45deg, #FF7E5F, #FFB347); /* Gradient colors */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; /* Makes the icon use the gradient */
          }

          @media (max-width: 991.98px) {
            .circle-bg {
              width: 200px;
              height: 200px;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            .phone-image {
              max-width: 250px;
            }
          }

          @media (max-width: 767.98px) {
            .feature-card {
              text-align: center;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FeaturesSection;
