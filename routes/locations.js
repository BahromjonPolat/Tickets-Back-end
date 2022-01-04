const express = require('express');
const router = express.Router();
const Location = require('../schemas/location_schema');

router.get('/', async (req, res) => {
    var data = await Location.find();
    res.status(200).json(data);
});

router.post('/', async (req, res) => {
    var location = await Location.create(
        {
            placeName: req.body.placeName,
            city: req.body.city,
            country: req.body.country
        }
    );

    res.status(200).json(data);
});

module.exports = router;