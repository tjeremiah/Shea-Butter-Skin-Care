const express = require('express');
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser');


const app = express();

//logger middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

//middleware to parse requests from req-body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//matches all routes to /api
app.use('/api', require('./api'));

//send index.html for any other request
app.get('*', (req, res)  => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});


module.exports = app;