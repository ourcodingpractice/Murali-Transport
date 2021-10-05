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

postVehicles = (req, res) => {
    let body = req.body
    console.log('******************', req.body);
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide details',
        })
    }

    const Vehicle = new Vehicles(body)

    if (!Vehicle) {
        return res.status(400).json({ success: false, error: err })
    }

    Vehicle
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'Vehicle Registered!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Vehicle not created!',
            })
        })

};

module.exports = {
    fetchVehicles,
    postVehicles
}