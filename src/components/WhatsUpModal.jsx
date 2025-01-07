import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function WhatsAppPopup() {
    const [show, setShow] = useState(true); // Show popup by default

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Chat with Us on WhatsApp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Need help? Chat with us on WhatsApp for quick assistance!
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="success"
                        href="https://wa.me/1234567890" // Replace with your WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open WhatsApp Chat
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
