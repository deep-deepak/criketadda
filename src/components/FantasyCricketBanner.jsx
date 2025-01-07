import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FantasyCricketBanner = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Phone number submitted:', phoneNumber);
    };

    return (
        <div
            className="fantasy-cricket-banner d-flex align-items-center justify-content-center"
        >
            <Container className="py-5">
                <Row className="justify-content-center text-center">
                    <Col xs={12} md={10} lg={8}>
                        <h2 className="banner-heading mb-4">
                            Join thousands of players and elevate your fantasy cricket journey. Download our app or sign up on our website today!
                        </h2>

                        <Form onSubmit={handleSubmit} className="get-started-form">
                            <Form.Control
                                type="tel"
                                placeholder="Enter your Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="form-input"
                            />
                            <Button
                                type="submit"
                                className="form-submit-btn"
                            >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FantasyCricketBanner;
