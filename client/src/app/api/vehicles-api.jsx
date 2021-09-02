import axios from 'axios';

const url = 'https://reqres.in/api/articles';
const postVehicle = (data) => {
    return axios.post(url, data);
}


export {
    postVehicle
}