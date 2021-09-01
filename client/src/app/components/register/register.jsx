import { React, Component } from 'react';
import '../register/register.css'

class VehicleRegister extends Component {
    render() {
        return (
            <div className="register-form m-auto">
                <div className="text-center pt-3">
                    <h2>Vehicle Details</h2>
                </div>
                <form>
                    <div className="form-group  row justify-content-md-center">

                        <div className="col-sm-6 m-1 p-1 align-self-center">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Owner name"></input>
                        </div>
                    </div>
                    <div className="form-group  row justify-content-md-center">
                        <div className="col-sm-6 align-self-center m-1 p-1">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Owner Phone number"></input>
                        </div>
                    </div>
                    <div className="form-group  row justify-content-md-center">
                        <div className="col-sm-6 align-self-center m-1 p-1">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Vehicle Number"></input>
                        </div>
                    </div>
                    <div className="form-group  row justify-content-md-center">
                        <div className="col-sm-6 align-self-center m-1 p-1">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Vehicle Model"></input>
                        </div>
                    </div>
                    <div className="form-group  row justify-content-md-center">
                        <div className="col-sm-6 align-self-center m-1 p-1">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Driver Name"></input>
                        </div>
                    </div>
                    <div className="form-group  row justify-content-md-center">
                        <div className="col-sm-6 align-self-center m-1 p-1">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder=" Driver Phone Number"></input>
                        </div>
                    </div>
                    <div className="form-group  row justify-content-md-center">
                        <div className="col-sm-6 align-self-center m-1 p-1">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Vehicle Location"></input>
                        </div>
                    </div>
                    <div className="d-flex  m-1 p-1 justify-content-center">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default VehicleRegister