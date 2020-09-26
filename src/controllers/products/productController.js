

/**
 * get all product
 * @param  
 * @param {*} res 
 */
exports.getAllProducts = (req, res, next) =>{
    res.status(200).json({message: 'This will handle GET request.'})  
}


/**
 * create new product
 * @param {*} req 
 * @param {*} res 
 */
exports.createProduct = (req, res, next) => {
    const product = {
        name: req.body
    }
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
exports.productById = (req, res, next) => {
    res.status(200).json({message: `This will handle GET ${req.params.productId} request.`})
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