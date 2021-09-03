import { React, Component, useState } from 'react';
import '../register/register.css';
import { postVehicle } from '../../api/vehicles-api';
import axios from 'axios';

class VehicleRegister extends Component {
    state = {}
    registerVehicle(e) {
        e.preventDefault();
        postVehicle({}).then(res => {
            console.log(res);
            this.setState({});
        }).catch(err => {
            console.log(err);
        });
        // const article = { title: 'React Hooks POST Request Example' };
        // axios.post('https://reqres.in/api/articles', article)
        //     .then(response => console.log(response));
    }
    render() {
        return (
            <div className="register-form m-auto">
                <div className="text-center pt-3">
                    <h2>Vehicle Details</h2>
                </div>
                <form>
                    <div className="form-group row justify-content-sm-center">

                        <div className="col-xs-5 col-md-6 col-lg-5 mt-3">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Owner name"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Owner Phone number"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Vehicle Number"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Vehicle Model"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Driver Name"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder=" Driver Phone Number"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Vehicle Location"></input>
                        </div>
                    </div>
                    <div className="d-flex  m-2 p-1 justify-content-center">
                        <button className="btn register-btn" onClick={this.registerVehicle}>Register</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default VehicleRegister