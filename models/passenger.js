const mongoose = require('mongoose');

passengerSchema = new mongoose.Schema({
    passenger_id: {
        type: 'string',
        require: true,
        unique: true
    },
    passenger_name: {
        type: 'string',
        require: true
    },
    passenger_phone: {
        type: 'string',
        require: true
    },
    passenger_email: {
        type: 'string',
        require: true
    },
    passenger_gender: {
        type: 'string',
        require: true
    },
    passenger_age: {
        type: 'Number',
        require: true
    },
});

module.exports = passenger = mongoose.model('passenger', passengerSchema);