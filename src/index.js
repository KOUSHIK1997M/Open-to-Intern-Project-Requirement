const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/route.js');
const multer = require("multer")
const { default: mongoose } = require('mongoose');
const app = express();
const connection = require("./db");

app.use(bodyParser.json());
app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: true }));




// database connection
connection();


app.use('/', router);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});