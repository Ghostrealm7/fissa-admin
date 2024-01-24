const express = require('express');
const db = require('../model/database')
const mysql = require('mysql2')
const bcrypt = require('bcrypt');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlRetrieve = "SELECT * FROM user u JOIN package p ON u.package_id = p.package_id"
    db.query(sqlRetrieve, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

router.get(`/:id`, (req, res) => {
    const user_id = req.params.id

    const sqlRetrieve = "SELECT * FROM user JOIN package ON user.package_id = package.package_id WHERE user_id= ?"
    db.query(sqlRetrieve, [user_id], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

router.get(`/:id/invoices`, (req, res) => {
    const user_id = req.params.id
    const sqlRetrieve = "SELECT invoice_id, name, issue_date, amount, payment_status, payment_method, transaction_id FROM user JOIN invoice ON user.user_id = invoice.user_id WHERE user.user_id= ?"
    db.query(sqlRetrieve, [user_id], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

module.exports = router; 