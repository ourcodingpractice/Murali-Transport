import axios from 'axios';

const url = 'https://muralitransport.wl.r.appspot.com/vehicles/post';
const postVehicle = (data) => {
    return axios.post(url, data);
}


export {
    postVehicle
}