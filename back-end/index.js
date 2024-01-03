const express = require('express');
const app = express();
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({ //database configuration
    host: "localhost",
    user: "root",
    database: "crudregister"
});

 app.post("/register", (req, res) => {
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( ?, ?, ? )";
    db.query(SQL, [name, cost, category], (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    });
});

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * from games";
    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    })
});

app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    let SQL = "UPDATE games SET name = ?, cost = ?, category = ? WHERE idgames = ?";

    db.query(SQL, [name, cost, category, id], (err, result) => {
        if (err) console.log(err)
        else res.send(result);
    });
});

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM games WHERE idgames = ?";
    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.listen(port, () => {
    console.log('server connected!');
});