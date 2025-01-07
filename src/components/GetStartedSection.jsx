import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GetStartedSection = () => {
    return (
        <Container fluid className="py-5" style={{ background: "#f8f9fa" }}>
            <Container>
                <Row className="align-items-center text-center text-md-start">
                    <Col lg={6} md={6} className="mb-4 mb-md-0">
                        <h1 className="display-4 fw-bold mb-4">Join the Action Today!</h1>
                        <p className="lead text-muted">
                            Sign up now to create your account and dive into the game in minutes.
                            Build your ultimate team by selecting players from upcoming matches,
                            and watch them earn points based on their real-life performances.
                            Compete to climb the leaderboard and unlock thrilling rewards!
                        </p>

                    </Col>
                    <Col lg={6} md={6} className="text-center">
                        <div
                            className="rounded-circle overflow-hidden mx-auto"
                            style={{
                                width: "250px",
                                height: "250px",
                            }}
                        >
                            <img
                                src="/images/started.jpg"
                                alt="Cricket bat and stumps"
                                className="img-fluid rounded-circle"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default GetStartedSection;
