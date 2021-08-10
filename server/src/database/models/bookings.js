const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Booking = new Schema(
    {
        load_type: { type: String },
        truck_type: { type: String },
        load_value: { type: String },
        pickup_location: { type: String },
        weight: { type: String },
        trucks_required: { type: String },
        drop_location: { type: Number },
        loading_date: { type: String },
        phone_number: { type: String, require: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('booking', Booking)