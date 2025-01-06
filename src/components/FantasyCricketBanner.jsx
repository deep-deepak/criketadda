import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FantasyCricketBanner = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div
            className="min-h-[300px] w-full flex items-center justify-center"
            style={{
                background: 'linear-gradient(90deg, #f6d365 0%, #845EC2 100%)',
                padding: "100px"
            }}
        >
            <Container className="py-16">
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8} className="text-center">
                        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-8 font-semibold">
                            Join countless players and enhance your fantasy cricket experience. Download our app or sign up on our website now!
                        </h2>

                        <Form onSubmit={handleSubmit} className="flex justify-center gap-2">
                            <input
                                type="text"
                                placeholder="Enter your Number"
                                className="px-4 py-2 rounded-md border-0 bg-white/10 text-white placeholder-white/70 w-48"
                                style={{
                                    backdropFilter: 'blur(4px)',
                                }}
                            />
                            <Button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
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