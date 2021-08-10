const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vehicles = new Schema(
    {
        owner_name: { type: String, required: true },
        owner_ph: { type: String, required: true },
        vehicle_type: { type: String },
        vehicle_number: { type: String },
        driver_name: { type: String, required: true },
        driver_ph: { type: String, required: true },
        load_max_capacity: { type: Number },
        vehicle_location: { type: String },
        customer_id: { type: String }
    },
    { timestamps: true },
)

module.exports = mongoose.model('vehicles', Vehicles)