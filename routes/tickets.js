const express = require('express');
const router = express.Router();
const Ticket = require('../schemas/ticket_scheme');

router.get('/', async (req, res) => {
    var data = await Ticket.find({
        isAvailable : false
    })
    .populate('user', '-_id -password')
    .populate('events', '-_id');
    res.json(data);
});

router.post('/', async (req, res) => {
    var data = Ticket.create(
        {
            user: req.body.userId,
            events: req.body.eventId,
            isAvailable: req.body.isAvailable,
            price: req.body.price
        }
    );

    res.status(200).json(data);
});

module.exports = router;
