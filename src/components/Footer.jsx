import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <div className="bg-black text-white py-4">
            <Container>
                <Card className=" text-white p-4" style={{ backgroundColor: "#333333" }}>
                    <Card.Body className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Responsible Gaming</h2>

                        <p className="mb-3">
                            Age Disclaimer: You must be 18 or older to participate in online gambling. Please play responsibly.
                        </p>

                        <p className="mb-3">
                            State-Specific Disclaimer: Daily Fantasy Sports are restricted in the following states: Andhra Pradesh, Assam, Nagaland, Orissa, Sikkim, and Telangana. Make sure to follow your local regulations.
                        </p>

                        <p className="mb-4">
                            Note: We do not endorse real money gambling. Our platform is designed for entertainment purposes only.
                        </p>

                        <h3 className="text-xl font-bold mb-3">Resources for Responsible Gaming</h3>

                        <p className="mb-3">
                            If you or someone you know is struggling with gambling addiction, we encourage you to seek help and play responsibly.
                        </p>

                        <p className="mb-4">
                            Terms and Conditions: For more details, please read our{' '}
                            <a href="#" className="text-gray-400 hover:text-white" style={{ color: "#f7c94b", textDecoration: "none" }}>
                                Terms and Conditions
                            </a>.
                        </p>
                    </Card.Body>

                </Card>
                <Row className="justify-content-center mt-2">
                    <Col className="text-center">
                        <div className="text-sm text-gray-400">
                            © TotalPlayField.com 2024. All Rights Reserved.
                        </div>
                        <div >

                            <a href="#" className="text-gray-400 hover:text-white mx-2" style={{ color: "#f7c94b", textDecoration: "none" }}>Privacy</a>
                            <span className="text-gray-400 mx-2">·</span>
                            <a href="#" className="text-gray-400 hover:text-white mx-2" style={{ color: "#f7c94b", textDecoration: "none" }}>Terms</a>
                            <span className="text-gray-400 mx-2">·</span>
                            <a href="#" className="text-gray-400 hover:text-white mx-2" style={{ color: "#f7c94b", textDecoration: "none" }}>About Us</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
