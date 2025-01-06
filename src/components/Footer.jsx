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
                            Age Disclaimer: You must be at least 18 years old to participate in online gambling activities. Please gamble responsibly.
                        </p>

                        <p className="mb-3">
                            State-Specific Disclaimer: Daily Fantasy Sports is not allowed in the following states: Andhra Pradesh, Assam, Nagaland, Orissa, Sikkim, and Telangana.
                            Ensure you comply with your local laws before engaging.
                        </p>

                        <p className="mb-4">
                            Note: We do not promote real money gambling. Our services are intended for entertainment purposes only.
                        </p>

                        <h3 className="text-xl font-bold mb-3">Responsible Gambling Resources</h3>

                        <p className="mb-3">
                            If you or someone you know is struggling with gambling addiction, please seek help. We encourage responsible gaming.
                        </p>

                        <p className="mb-4">
                            Terms and Conditions: For more information, please read our full{' '}
                            <a href="#" className="text-gray-400 hover:text-white">
                                Terms and Conditions
                            </a>
                            .
                        </p>



                    </Card.Body>
                </Card>
                <Row className="justify-content-center mt-2">
                    <Col className="text-center">
                        <div className="text-sm text-gray-400">
                            © TotalPlayField.com 2024. All Rights Reserved.
                        </div>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy</a>
                        <span className="text-gray-400 mx-2">·</span>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">Terms</a>
                        <span className="text-gray-400 mx-2">·</span>
                        <a href="#" className="text-gray-400 hover:text-white mx-2">About Us</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
