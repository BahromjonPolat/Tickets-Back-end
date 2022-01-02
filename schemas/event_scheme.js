const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        title: String,
        genre: String,
        date: { type: Date, default: Date.now },
        minPrice: Number,
        maxPrice: Number,
        details: String,
        updates: String,
    }
);

module.exports = mongoose.model('Event', eventSchema);