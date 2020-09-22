const express = require('express')
const route = express.Router()
const orderController = require('./../controllers/orders/orderController')


route.get('/', orderController.getAllOrders)
route.post('/', orderController.createOrder)
route.get('/:orderId', orderController.orderById)
route.put('/:orderId', orderController.updateOrder)
route.delete('/:orderId', orderController.destroyOrder)

module.exports = route