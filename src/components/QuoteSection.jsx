import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuoteSection = () => {
  return (
    <section className="quote-section position-relative overflow-hidden">
      <Container className="py-5">
        <div className="text-center mx-auto" style={{ maxWidth: '1000px' }}>
          <h2 className="display-5 fw-bold text-white text-center px-3">
            "Join the premier fantasy cricket platform where real-time updates, thrilling tournaments, personalized teams, expert strategies, and amazing rewards await you!"
          </h2>
        </div>
      </Container>

      <style>
        {`
          .quote-section {
            background: linear-gradient(90deg, #F2B705 0%, #9B4DCA 50%, #4A29E8 100%);
            min-height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media (max-width: 768px) {
            .quote-section {
              min-height: 300px;
              padding: 3rem 0;
            }
            
            .quote-section h2 {
              font-size: calc(1.2rem + 1.5vw);
              line-height: 1.4;
            }
          }

          @media (min-width: 769px) and (max-width: 1199px) {
            .quote-section h2 {
              font-size: calc(1.5rem + 1.5vw);
              line-height: 1.3;
            }
          }

          @media (min-width: 1200px) {
            .quote-section h2 {
              font-size: 2.5rem;
              line-height: 1.2;
            }
          }

          .quote-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              90deg,
              rgba(242, 183, 5, 0.1) 0%,
              rgba(155, 77, 202, 0.1) 50%,
              rgba(74, 41, 232, 0.1) 100%
            );
            z-index: 1;
          }

          .quote-section .container {
            position: relative;
            z-index: 2;
          }
        `}
      </style>
    </section>
  );
};

export default QuoteSection;