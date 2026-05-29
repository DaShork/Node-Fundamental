const mongoose = require('mongoose')
const connect = require('./connect')
const Player = require('./models/player')

const connectDB = async ( ) => {
    await connect()
    const newPlayer = new Player({
        name: 'PucHoang',
        age: 2007
    })
    newPlayer.note.push({
        note: 'Lam da lam',
        lenght: 15,
        author: 'Min'
    })
    await newPlayer.save()
    const playersDelete = await Player.deleteOne() 
    const players = await Player.find()
 
    console.log(players);
} 
connectDB()