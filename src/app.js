const express = require('express')

const app = express()

const productRoutes = require('./routes/products-routes')
app.get('/', (req, res) => {
    res.send('This is ROOT PATH...')
})


app.use('/product', productRoutes)
module.exports = app