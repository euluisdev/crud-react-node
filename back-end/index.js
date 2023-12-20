const express = require('express');
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3002;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "crudregister"
});

app.get("/", (req, res) => {
    let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( 'Far Cry', '120', 'Ação' )";

    db.query(SQL, (err, result) => {
        console.log(err);
    });
});

app.listen(port, () => {
    console.log('server connected!');
});