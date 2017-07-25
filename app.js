// const knex = require('./db/knex')
const express = require('express')
const app = express()
const cors = require('cors')
const car = require('./routes/router')
const port = process.env.PORT || 5000

app.use(cors());
app.use('/', car);



app.listen(port);
