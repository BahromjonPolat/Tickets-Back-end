var express = require('express');
var router = express.Router();
const User = require('../schemas/user_schema');

/* GET users listing. */
router.get('/', async (req, res) => {
  var data = await User.find();
  res.send(data);
});

router.post('/', async (req, res) => {
  var data = User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      imageUrl: req.body.imageUrl,
      isOnline: req.body.isOnline
    }
  );
  res.json(data);
});

module.exports = router;
