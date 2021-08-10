const Vehicles = require('../database/models/vehicles-model');

fetchVehicles = (req, res) => {
    Vehicles.find({}, function (err, data) {
        if (err) {
            return res.send({ error: err, success: false });
        }

        if (data) {
            return res.send({ ok: 200, data: data, success: true });
        }
    })
}

module.exports = {
    fetchVehicles
}