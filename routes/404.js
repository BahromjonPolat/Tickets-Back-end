const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(404).send('404');
});

module.exports = router;