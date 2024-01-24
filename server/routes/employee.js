const express = require('express');
const db = require('../model/database')
const mysql = require('mysql2')
const bcrypt = require('bcrypt');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlRetrieve = "SELECT * FROM employee"
    db.query(sqlRetrieve, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

router.get(`/:id`, (req, res) => {
    const patient_id = req.params.id

    const sqlRetrieve = "SELECT * FROM user WHERE patient_id= ?"
    db.query(sqlRetrieve, [patient_id], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const role = req.body.role;
    // concept of escaping to prevent SQL injection used below -> msql.format
    const sqlSearch = "SELECT * FROM employee WHERE email = ?"
    const sqlInsert = "INSERT INTO employee (name, email, password, role) VALUES (?, ?, ? ,?)"
    const search_query = mysql.format(sqlSearch, [email])

    db.query(search_query, async (err, result) => {
        if (err) throw (err)
        console.log("----> search results")
        console.log(result.length)
        if (result.length != 0) {
            console.log("User already exists")
            res.sendStatus(409)
        }
        else {
            db.query(sqlInsert, [name, email, hashedPassword, role], (err, result) => {
                console.log(err);
                console.log("Created new user")
                console.log(result.insertId)
                res.sendStatus(201)
            })
        }
    })
    db.commit();
});



module.exports = router; 