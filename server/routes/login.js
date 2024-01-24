const express = require('express');
const db = require('../model/database')
const mysql = require('mysql2')
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')

// Authentication Login
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const sqlSearch = "SELECT * FROM employee WHERE email = ?"
    const search_query = mysql.format(sqlSearch, [email])

    db.query(search_query, async (err, result) => {
        if (err) throw (err)

        if (result.length == 0) {
            console.log("User doesn't exist")
            res.sendStatus(404)
        }
        else {
            const hashedPassword = result[0].password
            console.log(result)

            if (await bcrypt.compare(password, hashedPassword)) {
                // GENERATE JWT TOKEN
                const accessToken = jwt.sign(
                    {
                        email: result[0].email,
                        id: result[0].id,
                        role: result[0].role
                    },
                    "accessTokenSecretKey"
                )
                console.log("Login Sucessfull!")
                res.json(accessToken)
            }
            else {
                console.log("Incorrect Password")
                res.send("Incorrect Password")
            }
        }
    })
})

module.exports = router;