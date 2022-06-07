const Sequelize = require('sequelize');
const db = require('../database');
const Customer = require('./customer');
const Product = require('./product');
const Order = require('./order');
const Payment = require('./payment');

const Transaction = db.define('transaction', {});

module.exports = Transaction;