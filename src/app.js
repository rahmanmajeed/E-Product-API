const express = require('express')
const logger = require('morgan')
const errorH = require('./exceptions/handler')
const parser = require('body-parser')
const dbConfig = require('./../config/db')
const appConfig = require('./../config/app.config')
const app = express()

app.set('App', appConfig.app_name)
app.use(logger('dev'))
app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization")

    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
        return res.status(200).json({})
    }
    next()
})

const productRoutes = require('./routes/products-routes')

const orderRoutes = require('./routes/orders-routes')

app.get('/', (req, res) => {
    res.send('This is ROOT PATH...')
})

     
app.use('/product', productRoutes)
app.use('/orders', orderRoutes)

app.use(errorH.errorInitial, errorH.errorHandle)


module.exports = app