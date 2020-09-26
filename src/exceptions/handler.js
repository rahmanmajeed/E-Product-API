
function errorInitial(req, res, next){
    const error = new Error("NOT FOUND")
    error.status = 404
    next(error)
}

function errorHandle (err, req, res, next){
    res.status(err.status || 500)
    res.json({
        message: err.message
    })
   
}

module.exports  = {errorInitial, errorHandle}

// class ErrorHanlder extends Error {
//     constructor(statusCode, message){
//         super();
//         this.statusCode = statusCode
//         this.message = message
//     }

// }

// const handleError = (err, res) => {
//     const { statusCode, message } = err;
//     res.status(statusCode).json({
//       status: "error",
//       statusCode,
//       message
//     });
//   };


// module.exports = {ErrorHanlder, handleError}