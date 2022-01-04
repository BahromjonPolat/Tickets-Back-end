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
        imageUrl: String,
        category: {
            type: String,
            default: 'book',
            enum: ['book', 'music', 'sport']
        },

        location : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Location'
        }
    }
);

module.exports = mongoose.model('Event', eventSchema);