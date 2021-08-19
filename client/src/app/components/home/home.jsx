import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../home/home.css';
import myVideo from '../../../app/public/videos/truck-home.mp4';

const Container = styled.div.attrs({
    className: 'container-fluid',
})`  padding: 0px;`

class Home extends Component {
    render() {
        return (
            <Container>
                <section>
                    <div className="video-overlay">
                        <div className="video-wrap">
                            <video controls autoPlay loop muted>
                                <source src={myVideo} type="video/mp4" ></source>
                            </video>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="vehicle-register">
                                    <div className="line-div">

                                    </div>
                                    <div className="content-group">
                                        <h1>Register Your Vehicle</h1>
                                        <span>WE'VE GOT YOU COVERED</span>
                                        <div className="btn-div">
                                            <button type="button" className="button" >Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className="vehicle-booking">
                                    <div className="line-div">

                                    </div>
                                    <div className="content-group">
                                        <h1>Book A Vehicle</h1>
                                        <span>FOR BEST QUALITY SHIPPING</span>
                                        <div className="btn-div">
                                            <Link to={"/booking"}>
                                                <button type="button" className="button">Booking</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        )
    }

}

export default Home