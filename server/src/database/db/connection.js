const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://satish:satishmongo@muralitransportservice.rhjoa.mongodb.net/muralitransport?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

