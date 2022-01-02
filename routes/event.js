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
          updates : req.body.updates,
      }  
    );
    res.json(data);
});

module.exports = router;