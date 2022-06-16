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

// //matches all routes to /api
app.use('/api', require('./api'));

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
app.get('*', (req, res)  => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// const port = process.env.PORT || 3000 //// this can be very useful if you deploy to Heroku!
// app.listen(port, function () {
//     console.log(`Torrel your server is listening on ${port}`)
// });

module.exports = app;