const express = require('express');
const router = express.Router();
const { createProduct, findOneProduct, deleteProduct, updateProduct } = require('../handlers/products');

//Create product
//get product handler to post new product on /api/products/
router.post('/', createProduct);

//Get a single product
router.get('/:product_id', findOneProduct);

//Updating a product
router.patch('/:product_id', updateProduct);

//Deleting a product
router.delete('/:product_id', deleteProduct);

module.exports = router;