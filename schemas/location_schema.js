const mongoose = require('mongoose');

const locationSchema = mongoose.Schema(
    {
        placeName : String,
        city : String,
        country : String
    }
);

module.exports = mongoose.model('Location', locationSchema);