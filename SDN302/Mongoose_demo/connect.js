const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/arsenalDemo'

const connect = async () => {
    try{
        await mongoose.connect(url)
        console.log('connect ok');
    }catch (error) {
        console.log(error);
    }
}
module.exports = connect
// neu dung mongo cu hon thi doi thanh 127.0.0.1:<port>


