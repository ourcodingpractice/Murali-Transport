import axios from 'axios';

const url = 'http://localhost:8080/vehicles/post';
const postVehicle = (data) => {
    return axios.post(url, data);
}


export {
    postVehicle
}