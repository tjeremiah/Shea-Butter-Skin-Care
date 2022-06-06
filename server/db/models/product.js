const Sequelize = require('sequelize');
const db = require('../database')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stock: {
       type: Sequelize.INTEGER,
       
    },
    price: {
        type: Sequelize.DECIMAL
    },
    description: {
        type: Sequelize.TEXT,
    }
});

Product.beforeCreate((product) => {
    product.name = `${product.name[0].toUpperCase()}${product.name.slice(1)}`
});

module.exports = Product;