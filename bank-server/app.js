const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session')
var SessionStore = require('express-mysql-session')
const mysql = require('mysql')
const connection = require('./connect')


const app = express();

var options = {
    host: '101.37.174.80',
    port: 3306,
    user: 'bankDB',
    password: 'suhong518',
    database: 'bankDB'
}

app.use(require('express-session')({
    secret: 'bank',
    name: 'login_session',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30 // 1 week
    },
    store: new SessionStore(options),
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded());


app.use('/insert', require('./routes/insert'))

app.use('/api/user', require('./routes/userRouter'))
app.use('/api/customer', require('./routes/customerRouter'));
app.use('/api/activity', require('./routes/activityRouter'));




app.listen('5009', 'localhost', (error) => {
    console.log('启动了:', error);
});



// connection.end();