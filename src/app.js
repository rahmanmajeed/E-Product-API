const express = require('express')

const app = express()

const productRoutes = require('./routes/products-routes')

const orderRoutes = require('./routes/orders-routes')

app.get('/', (req, res) => {
    res.send('This is ROOT PATH...')
})


app.use('/product', productRoutes)
app.use('/orders', orderRoutes)

module.exports = app