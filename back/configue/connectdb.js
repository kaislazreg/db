const mongoose = require('mongoose')

const connectedb=async()=>{
    try{
    await mongoose.connect("mongodb+srv://kais77:ik7ZjVKTaALwLuhB@cluster0.lozorez.mongodb.net/test") 
    console.log('connected to your database')
    }catch(err){
        console.log('err')
    }
}
module.exports = connectedb ;