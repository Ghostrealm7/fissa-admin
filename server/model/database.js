const mysql = require('mysql2')

// Initiate Database Connection
const data = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "fissa_db",
})
data.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Database Connection Succesfull')
});

module.exports = data;