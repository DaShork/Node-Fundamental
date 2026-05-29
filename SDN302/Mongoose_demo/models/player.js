const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({
    note:{
        type: String,
        required: true
    },
    lenght:{
        type: Number,
        min:3,
        max: 18,
        reuqired:true
    },
    author:{
        type: String,
        reuqired: true
    }
},{ timestamps:true })

const playerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },

    age:{
        type: Number,
        required:true
    },
    note:[noteSchema]
}, {timestamps:true})


const Player = mongoose.model('player', playerSchema)
module.exports = Player