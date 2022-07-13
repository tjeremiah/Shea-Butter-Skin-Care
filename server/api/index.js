// routes go here
// this file is like a table of contents for the routes created

const router = require('express').Router();

router.use('/products', require('./products'))


//if a request is made that starts with `/api`
// but there no corresponding router, this piece of middleware will generate a 404 error.
router.use(function(req, res, next) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

module.exports =  router;