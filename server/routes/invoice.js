const express = require('express');
const db = require('../model/database')
const mysql = require('mysql2')
const router = express.Router();



router.get(`/:id`, (req, res) => {
    const user_id = req.params.id
    const sqlRetrieve = "SELECT invoice_id, issue_date, ip_address, address, name, amount, payment_status, payment_method, transaction_id, settlement_date FROM user JOIN invoice ON user.user_id = invoice.user_id WHERE invoice_id= ?"
    db.query(sqlRetrieve, [user_id], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

module.exports = router; 