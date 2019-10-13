const express = require('express');
const router = express.Router();
const db = require('../../nedb');

let test1 = { name: 'world', today: new Date(), fruites: ['apple', 'orange', 'pear']};

router.get('/test', function (req, res) {
    console.log("call '/api/test'");
    db.snows.insert([test1], function (err, newDoc) {
    res.send('end');
    });
});

module.exports = router;
