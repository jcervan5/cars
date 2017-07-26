// const knex = require('./db/knex')
const express = require('express')
const cors = require('cors')
const app = express()
const car = require('./routes/router')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', car);



app.listen(port);
