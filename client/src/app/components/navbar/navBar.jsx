import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../navbar/navBar.css';
import myVideo from '../../../app/public/videos/truck-home.mp4';
import logo from '../../logo.svg';
import ReactPlayer from 'react-player'

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
                            <div className="navbar navbar-expand-lg">
                                <div className="collpase navbar-collapse">
                                    <div className="navbar-nav mr-auto">
                                        <a href="" to="/games/register" className="nav-link">
                                            <span> Register a Vehicle </span>
                                        </a>
                                        <a href="" to="/games/login" className="nav-link">
                                            <span> News </span>
                                        </a>
                                        <a href="" to="/games/login" className="nav-link">
                                            <span> Careers </span>
                                        </a>
                                        <a href="" to="/games/login" className="nav-link">
                                            <span> Events </span>
                                        </a>
                                        <a href="" to="/games/login" className="nav-link">
                                            <span> Contact </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="video-overlay">
                        <div className="video-wrap">
                            {/* <ReactPlayer url={myVideo} playing={true} muted={true} loop={true} /> */}
                            <video controls autoPlay loop muted>
                                <source src={myVideo} type="video/mp4" ></source>
                            </video>
                        </div>
                        <div className="video-content">
                            <div className="line-div">

                            </div>
                            <div className="content-group">
                                <h1>NATIONWIDE</h1>
                                <span>WE'VE GOT YOU COVERED</span>
                                <div className="btn-div">
                                    <button type="button" className="button">MORE ABOUT NTS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        )
    }

}

export default NavBar