const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        genre: String,
        date: Date,
        minPrice: Number,
        maxPrice: Number,
        details: String,
        updates: String,
        imageUrl: String
    }
);

module.exports = mongoose.model('Event', eventSchema);