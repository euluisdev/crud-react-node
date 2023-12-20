const express = require('express');
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log('server connected!');
});