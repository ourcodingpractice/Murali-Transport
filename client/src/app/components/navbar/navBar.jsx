import React, { Component } from 'react';
import styled from 'styled-components';
import '../navbar/navBar.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import SignUpModal from '../signup/signup';
import LoginModal from '../login/login';

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
                    <div className="row">
                        <div className="contact-info">
                            <div>
                                <i className="fa fa-phone fa-lg"></i> <span>+91 9032245617</span>
                            </div>
                            <div>
                                <label>Email : </label><span> anu@yopmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="col-4">

                        </div>
                        <div className="col-6 navBar">
                            <div className="navbar-expand-sm">
                                <div className="navbar-nav">

                                    <div href="" className="nav-link">
                                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                                            <span> Home </span>
                                        </Link>
                                    </div>

                                    <div href="" to="/signup" className="nav-link">
                                        <SignUpModal />
                                    </div>
                                    <div href="" to="/login" className="nav-link">
                                        <LoginModal />
                                    </div>
                                    <div href="" to="/contact" className="nav-link">
                                        <span> Contact </span>
                                    </div>
                                    <div href="" to="/profile" className="nav-link">
                                        <span> Profile</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Container>
        )
    }

}

export default NavBar