// This is our seed file. We'll import our Sequelize models from
// ./database/index and create some dummy data in the database. Seeding a
// database is very useful for development.
//const { blue, cyan, green, red } = require('chalk');

const db = require('./server/db/database');
const { green, red } = require ('chalk');

const { Customer, Delivery, Order, Payment, Product, Transaction } = require('./server/db/models');

const customerData = [
    {
      firstname: 'Torrel',
      lastname: 'Jeremiah',
      username: 'torrel@123',
      address: 'Brooklyn, NY',
      email: 'torrel@123',
    },
    {
      firstname: 'Corzette',
      lastname: 'Beekman',
      username: 'corzette@123',
      address: 'University Park, PA',
      email: 'corzette@123',
      
    },
]

const productData = [
    {
      name: 'Cleansing Conditioner',
      price: 29.00,
      stock: 20,
      description: 'Seasonal Cleansing Conditioner',
      categoryId: 1,
      customerId: 1,
    },
    {
     name: 'Hand lotion',
     price: 29.00,
     stock: 20,
     description: 'Seasonal Cleansing lotion',
     categoryId: 1,
     customerId: 1,
    },
]

const orderData = [
    {
      customerId: 1,
      date: 04/27/2022,
      
     },
     
     {
       customerId: 2,
       date: 04/27/2022,
       
     },
   ]

   const deliveryData = [
       {
         customerId: 1,
         date: 04/27/2022,
         
       }
   ]

   const paymentData = [
   {
     customerId: 1,
     categoryId: 1,
     date: 04/27/2022
   },

   {
    customerId: 2, 
    categoryId: 2,
    date: 04/27/2022,
   }
]

const transactionData = [
  {
    customerId: 1,
    productId: 1,
    orderId: 1,
    paymentId: 1
  },

  {
    customerId: 2,
    productId: 2,
    orderId: 2,
    paymentId: 2
  }
]

async function seed() {
    try {
      console.log(green('📡 Connecting to the database...'));
      // Connect to the database
      await db.sync({force: true});
  
      console.log('🌱 Seeding the database...');
      
      // Seed the database
      const [customer, product,  delivery, order, payment, transaction] = await Promise.all([
        Customer.bulkCreate(customerData, {returning: true}),
        Product.bulkCreate(productData, {returning: true}),
        Delivery.bulkCreate(deliveryData, {returning: true}),
        Order.bulkCreate(orderData, {returning: true}),
        Payment.bulkCreate(paymentData, {returning: true}),
        Transaction.bulkCreate(transactionData, {returning: true}),
      ]) 
        
      await db.close();
  
      console.log('🌲 Finished seeding the database!');
      await db.close();
    } catch (err) {
      console.log('🔥 An error occured!!');
      console.error(err);
      await db.close();
     }
  }
  seed();