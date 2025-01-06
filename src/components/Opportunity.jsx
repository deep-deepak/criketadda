import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Opportunity() {
    return (
        <div className="opportunity-section">
            <Container>
                <Row className="justify-content-center align-items-center text-center">
                    <Col>
                        <h1 className="opportunity-text">
                            Total Play Field – Where Every Match Presents a New Opportunity!
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Opportunity;
