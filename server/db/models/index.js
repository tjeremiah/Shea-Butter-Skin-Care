// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('../database');
const Product = require('./product');
const Customer = require('./customer');
const Delivery = require('./delivery');
const Order = require('./order');
const Payment = require('./payment');
const Transaction = require('./transaction');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)
// Campus.hasMany(Student)
// Student.belongsTo(Campus)

Customer.hasMany(Product);
Product.belongsTo(Customer);

Customer.hasMany(Payment);
Payment.belongsTo(Customer);

Customer.hasMany(Delivery);
Delivery.belongsTo(Customer);

Customer.hasMany(Order);
Order.belongsTo(Customer);

// Order.hasMany(Transaction);
// Transaction.belongsTo(Order);

// Product.hasMany(Transaction);
// Transaction.belongsTo(Product);


// Transaction.belongsTo(Customer);
// Transaction.belongsTo(Payment);






module.exports = {
  // Include your models in this exports object as well!
  db,
  Product,
  Customer,
  Delivery,
  Order,
  Payment,
  Transaction,
}