const Sequelize = require('sequelize');
const db = require('../database');


const Payment = db.define('payment', {
    date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        isDate: true,
        defaultValue: Sequelize.NOW,
    }
});


module.exports = Payment;