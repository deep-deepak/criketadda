import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GetStartedSection = () => {
    return (
        <Container fluid className="py-5 " style={{ background: "#f8f9fa" }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={6} className="mb-4 mb-md-0">
                        <h1 className="display-4 fw-bold mb-4">Get Started Today!</h1>
                        <p className="lead text-muted">
                            Sign up to create your account and get started in just minutes.
                            Assemble your team by choosing players from upcoming matches,
                            then compete by earning points based on their real-life
                            performances. Rise up the leaderboard and snag exciting rewards!
                        </p>
                    </Col>
                    <Col lg={6} md={6} className="text-center">
                        <div className="rounded-circle overflow-hidden">
                            <img
                                src="/images/started.jpg"
                                alt="Cricket bat and stumps"
                                className="img-fluid rounded-circle"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
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