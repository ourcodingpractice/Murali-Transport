import { React, Component } from 'react';
import '../register/register.css';
import { postVehicle } from '../../api/vehicles-api';

class VehicleRegister extends Component {
    state = {
        owner_name: ``,
        owner_ph: '',
        vehicle_type: '',
        vehicle_number: '',
        driver_name: '',
        driver_ph: '',
        load_max_capacity: '',
        vehicle_location: '',
        customer_id: null
    }
    isRegistered = false;


    registerVehicle = (e) => {
        e.preventDefault();
        postVehicle(this.state).then(res => {
            // this.props.history.push('/home');
            this.isRegistered = true;
        }).catch(err => {
            console.log(err);
        });
    }

    handleChange = (e) => {
        this.state[e.target.name] = e.target.value;
        this.setState(this.state);
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
                            <input type="text" className="form-control" onChange={this.handleChange} name="owner_name" value={this.state.owner_name} placeholder="Owner name"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" onChange={this.handleChange} name="owner_ph" value={this.state.owner_ph} placeholder="Owner Phone number"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" onChange={this.handleChange} name="vehicle_number" value={this.state.vehicle_number} placeholder="Vehicle Number"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" onChange={this.handleChange} name="vehicle_type" value={this.state.vehicle_type} placeholder="Vehicle Model"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" onChange={this.handleChange} name="driver_name" value={this.state.driver_name} placeholder="Driver Name"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" onChange={this.handleChange} name="driver_ph" value={this.state.driver_ph} placeholder=" Driver Phone Number"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" onChange={this.handleChange} name="vehicle_location" value={this.state.vehicle_location} placeholder="Vehicle Location"></input>
                        </div>
                    </div>
                    <div className="form-group row justify-content-sm-center">
                        <div className="col-xs-5 col-md-6 col-lg-5  mt-3">
                            <input type="text" className="form-control" onChange={this.handleChange} name="load_max_capacity" value={this.state.load_max_capacity} placeholder="Load Capacity (in Tons)"></input>
                        </div>
                    </div>
                    <div className="d-flex  m-2 p-1 justify-content-center">
                        <button className="btn register-btn" onClick={this.registerVehicle}>Register</button>
                    </div>

                </form>
            </div>)
    }
}

export default VehicleRegister