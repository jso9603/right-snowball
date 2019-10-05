const express = require('express');
const path = require('path');
const cors = require('cors');
const env = process.env.ENV || 3050;
const app = express();

const homeRoutes = require('./backend/routes/home');
const apiRoutes = require('./backend/routes/api');

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'contract_build')));

 // 라우터 분리
app.use('/', homeRoutes);
app.use('/api', apiRoutes);

app.listen(3050, () => {
  console.log('listening: ' + env);
});