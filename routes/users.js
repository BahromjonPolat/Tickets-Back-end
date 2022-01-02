var express = require('express');
var router = express.Router();
const User = require('../schemas/user_schema');

/* GET users listing. */
router.get('/', async (req, res) => {
  var data = await User.find().select({ password: 0 });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const uid = req.params.id;
  try {
    var data = await User.findOne({ _id: uid }, (err, user) => {

    }).select({ password: 0 });

    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
    var data = await User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        imageUrl: req.body.imageUrl,
        isOnline: req.body.isOnline,
        firstTime: req.body.firstTime,
        lastAction: req.body.lastAction
      }
    );
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.json({message: err});
  }
});

module.exports = router;
