const router = require("express").Router();
const {Product} = require("../db");

// Get /api/products
router.get("/", async (req, res, next) => {
    try {
      const allProducts = await Product.findAll();
      res.send(allProducts)
    } catch (error) {
       next(error); 
    }
});

module.exports = router;