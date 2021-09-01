import React, { Component } from 'react';
import '../footer/footer.css'

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid footer-div m-auto p-3">
                <div className="row">
                    <div className="col-8">
                        <div className="heading"></div>
                        <div className="content">
                            <p>Murali Transport, Dommeru.
                            </p>
                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <div className="heading"><p>Contact Information</p></div>
                        <div> <p>Connect me at: <a href="https://www.facebook.com/">Facebook</a></p></div>
                        { <div className="content">
                            Phone : +91 9032245761<br></br>
                            What's App : +91 90324567<br></br>
                            Email : truck@yopmail.com<br></br>
                            Office open : 5am to 9 pm<br></br>
                        </div> }
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;