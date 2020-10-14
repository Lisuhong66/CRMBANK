const mysql = require('mysql')

var connection = mysql.createConnection({
    host: '101.37.174.80',
    user: 'bankDB',
    password: 'suhong518',
    database: 'bankDB'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;