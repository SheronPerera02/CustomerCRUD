const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const CustomerRouter = require('./router/CustomerRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const BASE = '/api/v1/';
const PORT = process.env.PORT || 3000;

app.use(BASE + 'customer', CustomerRouter);

app.listen(PORT, ()=>{
    console.log('Server listening on port '+PORT+'...');
});
