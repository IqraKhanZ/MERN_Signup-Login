const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const AuthRouter = require('../Routes/AuthRouter');
const ProductRouter = require('../Routes/ProductRouter');

require('dotenv').config();
require('../Models/db');

const app = express();

app.get('/ping', (req, res) => res.send('PONG'));

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

module.exports = app; // <-- important (no app.listen)
