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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// //matches all routes to /api
// app.use('/api', require('./apiRoutes'));

app.get('/', (req, res) => {
    res.send(`
      <html>
       <head>
         <title>Puppies and Kittens</title>
       </head>
       <body>
         <h1>Puppies and Kittens Galore</h1>
       </body>
      </html>
    `)
  });

  
//send index.html for any other request
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public'))
});

//error handling middleware
app.use(function(err, req, res, next) {
    console.error(err);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 1337 //// this can be very useful if you deploy to Heroku!
app.listen(port, function () {
    console.log(`your server is listening on ${port}`)
});

module.exports = app;