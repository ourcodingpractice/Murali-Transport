import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormDialog() {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [signUp, setFormState] = useState({
        email: ``,
        password: ``,
        confirm_password: ``,
        fname: ``,
        lname: ``,
        ph_number: ``,
        errors: {
            emailError: ``,
            passwordError: ``,
            confirm_passwordError: ``,
            fnameError: ``,
            lnameError: ``,
            ph_numberError: ``,
        }
    });


    const handleSubmit = (event) => {
        if (!handleValidations()) {
            setValidated(true);
            event.preventDefault();
            event.stopPropagation();
        } else {
            // handleClose();
        }

    };

    const handleValidations = () => {
        let isValid = true;
        if (!signUp.fname.length) {
            isValid = false;
            signUp['errors'].fnameError = 'Please enter your first name !!'
        } else {
            signUp['errors'].fnameError = '';
        }

        if (!signUp.lname.length) {
            isValid = false;
            signUp['errors'].lnameError = 'Please enter your last name !!'
        } else {
            signUp['errors'].lnameError = ''
        }

        if (!signUp.email.length) {
            isValid = false;
            signUp['errors'].emailError = 'Please enter correct email !!'
        } else {
            signUp['errors'].emailError = ''
        }
        if (!signUp.ph_number.length) {
            isValid = false;
            signUp['errors'].ph_numberError = 'Please enter Phone number !!'
        } else {
            signUp['errors'].ph_numberError = ''
        }
        if (!signUp.password.length) {
            isValid = false;
            signUp['errors'].passwordError = 'Please enter password !!'
        } else {
            signUp['errors'].passwordError = ''
        }
        if (!signUp.confirm_password.length) {
            isValid = false;
            signUp['errors'].confirm_passwordError = 'Please enter confirmation password !!'
        } else {
            signUp['errors'].confirm_passwordError = ''
        }

        return isValid;
    }

    const resetModal = () => {
        setFormState({
            email: ``,
            password: ``,
            confirm_password: ``,
            fname: ``,
            lname: ``,
            ph_number: ``,
            errors: {
                emailError: ``,
                passwordError: ``,
                confirm_passwordError: ``,
                fnameError: ``,
                lnameError: ``,
                ph_numberError: ``,
            }
        });
    }

    const handleClose = () => {
        setShow(false)
        resetModal();
        setValidated(false);
    };
    const handleShow = () => setShow(true);

    const handlePhoneNumberChange = (e) => {
        let regex;
        e.type === 'change' ? regex = /^[0-9]{1,10}$/ : regex = /^[0-9]{10}$/;
        if (regex.test(Number(e.target.value))) {
            signUp[e.target.name] = e.target.value;
            setFormState({
                ...signUp
            });
        }


    };

    const handleChange = (e) => {

        signUp[e.target.name] = e.target.value;
        setFormState({
            ...signUp
        });
    };

    const handlePasswordMatch = (e) => {
        if (e.type === 'change') {
            signUp[e.target.name] = e.target.value;
            setFormState({
                ...signUp
            });
        } else if ((signUp['password'].length > 0) && (signUp['confirm_password'].length > 0)) {
            if ((signUp['password'].length !== signUp['confirm_password'].length)) {
                signUp['errors'].confirm_passwordError = 'Password and confirm password are not matching !!'
            } else if (signUp['password'] !== signUp['confirm_password']) {
                signUp['errors'].confirm_passwordError = 'Password and confirm password are not matching !!'
            } else if (signUp['password'] === signUp['confirm_password']) {
                signUp['errors'].confirm_passwordError = '';
            }
        }
    }


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
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control required type="text" placeholder="First name" name="fname" value={signUp.fname} onChange={handleChange} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a first name.
                                </Form.Control.Feedback>
                            </Col>
                            <Col>
                                <Form.Control required type="text" placeholder="Last name" name="lname" value={signUp.lname} onChange={handleChange} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a last name.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control required minLength="10" maxLength="10" type="text" placeholder="Phone number" name="ph_number" value={signUp.ph_number} onChange={handlePhoneNumberChange} onBlur={handlePhoneNumberChange} />
                                <Form.Control.Feedback type="invalid">
                                    {signUp.ph_number.length === 0 ? 'Please enter your phone number.' : 'Enter 10 digit phone number'}
                                </Form.Control.Feedback>

                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control required type="email" placeholder="Email" name="email" value={signUp.email} onChange={handleChange} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter an email.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control required type="text" placeholder="Password" name="password" value={signUp.password} onChange={handleChange} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a password.
                                </Form.Control.Feedback>
                            </Col>
                        </Row>
                        {/* <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Confirm Password" isInvalid={signUp['errors'].confirm_passwordError.length > 0} name="confirm_password" value={signUp.confirm_password} onChange={handlePasswordMatch} onBlur={handlePasswordMatch} />
                                <Form.Control.Feedback>Looks good! {!!signUp['errors'].confirm_passwordError.length}</Form.Control.Feedback>Hii{!!signUp['errors'].confirm_passwordError.length}
                                <Form.Control.Feedback type="invalid">
                                    {signUp['errors'].confirm_passwordError.lenth === 0 ? 'Please enter confirm password.' : signUp['errors'].confirm_passwordError}
                                </Form.Control.Feedback>
                            </Col>
                        </Row> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'center' }}>
                    <Button size="lg" type="submit" variant="outline-light" style={{ backgroundColor: '#42b72a' }} onClick={handleSubmit}>
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

//   render(<Example />);