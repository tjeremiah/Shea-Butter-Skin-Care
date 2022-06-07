const Sequelize = require('sequelize');
const db = require('../database.js');

const Customer = db.define('customer', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: Sequelize.TEXT,
        allowNull: false,
        Unique: true,
    },

    address: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }
});

Customer.beforeCreate((customer) => {
    customer.firstname = `${customer.firstname[0].toupperCase()}${customer.firstname.slice(1)}`;
});

Customer.beforeCreate((customer) => {
    customer.lastname = `${customer.lastname[0].toupperCase()}${customer.firstname.slice(1)}`;
});

module.exports = Customer;



