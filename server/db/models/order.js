const Sequelize = require('sequelize');
const db = require('../database');

const Order = db.define('order', {
    date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        isDate: true,
        defaultValue: Sequelize.NOW,
    }
});

module.exports = Order;