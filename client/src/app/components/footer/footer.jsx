import React, { Component } from 'react';
import '../footer/footer.css'

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid footer-div m-auto p-3">
                <div className="row">
                    <div className="col-8">
                        <div className="heading">ABOUT OUR COMPANY</div>
                        <div className="content">
                            <p>TruckGuru, a leading transport and logistics service provider is introducing a truly innovative, modern and high-tech online platform to book the truck in a few simple steps.
                                With the apt use of advanced technology and rich industry experience, we are delivering customized and economical online transportation and cargo solutions to match your expectations and exceed industry benchmarks.
                            </p>
                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <div className="heading">CONTACT INFORMATION</div>
                        {/* <div className="content">
                            Phone : +91 9032245761<br></br>
                            What's App : +91 90324567<br></br>
                            Email : truck@yopmail.com<br></br>
                            Office Timings : 9am to 5 pm<br></br>
                        </div> */}
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;