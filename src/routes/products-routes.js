const express = require('express')
const route = express.Router()
const productController = require('./../controllers/products/productController')


route.get('/', productController.getAllProducts)
route.post('/', productController.createProduct)
route.get('/:productId', productController.productById)
route.put('/:productId', productController.updateProduct)
route.delete('/:productId', productController.destroyProduct)

module.exports = route