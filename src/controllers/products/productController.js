
const Product = require('./../../models/product')
const mongoose = require('mongoose')
/**
 * get all product
 * @param  
 * @param {*} res 
 */
exports.getAllProducts = (req, res, next) =>{
    Product.find()
           .exec()
           .then(docs => {
               res.status(201).json(docs)
           })
           .catch(err => {
               res.status(404).json({error: err})
           })
    res.status(200).json({message: 'This will handle GET request.'})  
}


/**
 * create new product
 * @param {*} req 
 * @param {*} res 
 */
exports.createProduct = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })

    product.save().then(res => {
        console.log(res)
    }).catch(err=> {
        console.log(err)
    })
    res.status(200).json({
        message: 'This will handle POST request.',
        product:product
    })
}

/**
 * product by id
 * @param id req 
 * @param res 
 */
exports.productById = async(req, res, next) => {
    const id = req.params.productId
    await Product.findById(id).exec()
                 .then(result => {
                     if(result){
                        res.status(200).json({product: result})
                     }else {
                         res.status(404).json({message: 'No valid entry found !!!'})
                     }
                    })
                 .catch(err => {
                        res.status(404).json({message: 'No Product found!!!'})
                    })

}

/**
 * product update by id
 * @param collection id 
 * @param res 
 */
exports.updateProduct = (req, res, next) => {
    res.status(200).json({message: `This will handle PUT request.`})
}

/**
 * product destroy by id
 * @param id 
 * @param res 
 */
exports.destroyProduct = (req, res, next) => {
    res.status(200).json({message: `This will handle DELETE request.`})
}