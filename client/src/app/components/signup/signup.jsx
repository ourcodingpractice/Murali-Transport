import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function FormDialog() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow}>
                Sign UP
            </span>

            <Modal size="md" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="First name" />

                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Last name" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Phone number" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Email" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Password" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Confirm Password" />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'center' }}>
                    <Button size="lg" variant="outline-light" style={{ backgroundColor: '#42b72a' }} onClick={handleClose}>
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

//   render(<Example />);