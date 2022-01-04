const express = require('express');
const router = express.Router();
const Event = require('../schemas/event_scheme');

router.get('/',async (req,res) => {
    var data = await Event.find();
    res.json(data);
});

router.post('/',async (req, res) => {
    var data = await Event.create(
      {
          title : req.body.title,
          genre : req.body.genre,
          minPrice : req.body.minPrice,
          maxPrice : req.body.maxPrice,
          details : req.body.details,
          date : req.body.date,
          updates : req.body.updates,
          imageUrl : req.body.imageUrl,
      }  
    );
    res.status(200).json(data);
});

module.exports = router;