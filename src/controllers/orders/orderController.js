

/**
 * get all order
 * @param  
 * @param {*} res 
 */
exports.getAllOrders = (req, res, next) =>{
    res.status(200).json({message: 'This will handle GET request.'})  
}


/**
 * create new order
 * @param {*} req 
 * @param {*} res 
 */
exports.createOrder = (req, res, next) => {
    res.status(200).json({message: 'This will handle POST request.'})
}

/**
 * order by id
 * @param id req 
 * @param res 
 */
exports.orderById = (req, res, next) => {
    res.status(200).json({message: `This will handle GET ${req.params.orderId} request.`})
}

/**
 * order update by id
 * @param collection id 
 * @param res 
 */
exports.updateOrder = (req, res, next) => {
    res.status(200).json({message: `This will handle PUT request.`})
}

/**
 * order destroy by id
 * @param id 
 * @param res 
 */
exports.destroyOrder = (req, res, next) => {
    res.status(200).json({message: `This will handle DELETE request.`})
}