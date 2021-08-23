import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LoginModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow}>
                Login
            </span>

            <Modal size="md" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Phone number" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Password" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="d-grid gap-2">
                                <Button variant="primary" onClick={handleClose}>
                                    Log In
                                </Button>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="d-grid gap-2">
                                <Button variant="link" href="" style={{ textDecoration: 'none', textAlign: 'center' }}>
                                    Forgotten Password ?
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'center' }}>
                    <Button size="md" variant="outline-light" style={{ backgroundColor: '#42b72a' }} onClick={handleClose}>
                        Create New Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
