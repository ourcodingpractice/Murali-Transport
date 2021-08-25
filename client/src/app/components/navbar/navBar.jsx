import React, { Component } from 'react';
import styled from 'styled-components';
import '../navbar/navBar.css';
import logo from '../../logo.svg';
import SignUpModal from '../signup/signup';
import LoginModal from '../login/login';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Container = styled.div.attrs({
    className: 'container-fluid',
})`
    padding: 0px;
`

class NavBar extends Component {

    render() {
        return (
            <Container>
                <header className="v-header">
                    <div className="row contact-info">
                        {/* <div className="contact-info"> */}
                        <div className="col-md-6">
                            <i className="fa fa-phone fa-lg"></i> <span>+91 9032245617</span>
                        </div>
                        <div className="col-md-6">
                            <label>Email : </label><span> anu@yopmail.com</span>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="row">
                        <div className="col-2 text-center">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="col-6 offset-4 text-center">
                            <Navbar expand="sm" style={{ justifyContent: 'flex-end' }}>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ padding: '.75rem' }} />
                                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                                    <Nav>
                                        <Nav.Item style={{ minWidth: '85px' }}> <Nav.Link href="/">  <span> Home </span></Nav.Link></Nav.Item>
                                        <Nav.Item style={{ minWidth: '85px' }}> <Nav.Link href=""> <SignUpModal /></Nav.Link></Nav.Item>
                                        <Nav.Item style={{ minWidth: '85px' }}>   <Nav.Link href="">   <LoginModal /></Nav.Link></Nav.Item>
                                        <Nav.Item style={{ minWidth: '85px' }}>   <Nav.Link href="/contact"> <span> Contact </span></Nav.Link></Nav.Item>
                                        <Nav.Item style={{ minWidth: '85px' }}>  <Nav.Link href="/profile">  <span> Profile</span></Nav.Link></Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </header>
            </Container>
        )
    }

}

export default NavBar