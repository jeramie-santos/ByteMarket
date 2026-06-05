const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/categories', productController.getCategories);

module.exports = router;