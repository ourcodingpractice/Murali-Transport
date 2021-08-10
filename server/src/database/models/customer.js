const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Customer = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String },
        Phone_number: { type: String, required: true },
        email: { type: String },
        password: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('customer', Customer)