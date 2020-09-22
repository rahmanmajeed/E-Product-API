

/**
 * get all product
 * @param  
 * @param {*} res 
 */
exports.getAllProducts = (req, res) =>{
    res.json({message: 'This will handle GET request.'})  
}


/**
 * create new product
 * @param {*} req 
 * @param {*} res 
 */
exports.createProduct = (req, res) => {
    res.json({message: 'This will handle POST request.'})
}

/**
 * product by id
 * @param id req 
 * @param res 
 */
exports.productById = (req, res) => {
    res.json({message: `This will handle GET ${req.params.productId} request.`})
}

/**
 * product update by id
 * @param collection id 
 * @param res 
 */
exports.updateProduct = (req, res) => {
    res.json({message: `This will handle PUT request.`})
}

/**
 * product destroy by id
 * @param id 
 * @param res 
 */
exports.destroyProduct = (req, res) => {
    res.json({message: `This will handle DELETE request.`})
}