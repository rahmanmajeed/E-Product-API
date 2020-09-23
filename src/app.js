const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))

const productRoutes = require('./routes/products-routes')

const orderRoutes = require('./routes/orders-routes')

app.get('/', (req, res) => {
    res.send('This is ROOT PATH...')
})


app.use('/product', productRoutes)
app.use('/orders', orderRoutes)

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        message: err.message
    })
})

module.exports = app