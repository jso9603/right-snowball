const express = require('express');
const path = require('path');
const cors = require('cors');
const env = process.env.ENV || 3050;
const app = express();

app.use(cors());

// Nedb
const Datastore = require('nedb');
const db = new Datastore({ filename: 'test.db', autoload: true });

let test1 = { name: 'world', today: new Date(), fruites: ['apple', 'orange', 'pear']};

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.use('/', express.static(path.join(__dirname, 'contract_build')));

app.get('/api/test', function (req, res) {
  console.log('2222')
  db.insert([test1], function (err, newDoc) {
    console.log('test!!');
    res.send('end');
  });
});

app.listen(3050, () => {
  console.log('listening: ' + env);
});