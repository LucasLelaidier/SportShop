const mysql = require('mysql');

// Codes d'accès à la base principale
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'genielog',
});

// Connexion à la base principale
con.connect((err) => {
    if (err) throw err;
});

/* // Codes d'accès à la base de test
const testCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'genielog_test',
});

// Connexion à la base de test
testCon.connect((err) => {
    if (err) throw err;
}); */

exports.con = con;
// exports.testCon = testCon;
