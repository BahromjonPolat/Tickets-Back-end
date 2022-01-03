const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
    {
        price: { type: Number, required: true },
        isAvailable: { type: Boolean, default: true },
        events: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required: true
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    }
);

module.exports = mongoose.model('Ticket', ticketSchema);