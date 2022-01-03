const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema(
    {
        events: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
            required : true
        },
        user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'},
        price: { type: Number, required: true },
        isAvailable: { type: Boolean, default: true }
    }
);

module.exports = mongoose.model('Ticket', ticketSchema);