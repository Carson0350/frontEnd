const express = require('express');
const morgan = require('morgan');
const router = require('./routes/routes.js');
const path = require('path');

const PORT = 3000;
const app = express();

// middleware
app.use(express.json());
// app.use(morgan('dev'));

// serve static assets
app.use(express.static(path.join(__dirname, '../client/dist')));

// router
app.use('/', router);

// create server on port 3000
app.listen(PORT, () => {console.log(`listening on PORT ${PORT}`);});

