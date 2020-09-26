const mongoose = require('mongoose')

 const conn =  mongoose.connect("mongodb://root:root@localhost:27017/eApi?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
const testConn = mongoose.connection
 
module.exports = {conn, testConn}


