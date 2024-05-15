const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'school_timetable'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

module.exports = connection;
