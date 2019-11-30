const mysql = require('mysql');

// Codes d'accès à la base
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'genielog',
});

// Connexion à la base
con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = con;
