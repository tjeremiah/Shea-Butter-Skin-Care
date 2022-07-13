const router = require("express").Router();
const {Product} = require("../db");

// Get /api/products
router.get("/", async(res, req, next) =>{
    try {
      const allProducts = await Product.findAll();
      res.send(allProducts)
    } catch (error) {
       next(error) 
    }
});

module.exports = router;