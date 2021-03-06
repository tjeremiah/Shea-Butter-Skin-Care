const Sequelize = require('sequelize');
const db = require('../database')

const Delivery = db.define('delivery', {
    date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        isDate: true,
        defaultValue: Sequelize.NOW,
    },
});

module.exports = Delivery;