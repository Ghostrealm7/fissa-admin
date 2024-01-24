const express = require('express');
const db = require('../model/database')
const mysql = require('mysql2')
const router = express.Router();

router.get(`/grid_data`, (req, res) => {
    const sqlRetrieve = "SELECT 'users' AS role, COUNT(*) AS total FROM user UNION ALL SELECT 'agents' AS role, COUNT(*) AS total FROM employee UNION SELECT 'tickets' AS role, COUNT(*) AS total FROM ticket UNION SELECT 'package' AS role, COUNT(*) AS total FROM package"
    db.query(sqlRetrieve, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

router.get(`/user_data`, (req, res) => {
    const sqlRetrieve = "SELECT type AS name, COUNT(*) AS value FROM user GROUP BY type"
    db.query(sqlRetrieve, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

router.get(`/package_data`, (req, res) => {
    const sqlRetrieve = "SELECT p.package_name AS name, COUNT(u.user_id) AS value FROM package p JOIN user u ON p.package_id = u.package_id GROUP BY p.package_name"
    db.query(sqlRetrieve, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

module.exports = router;