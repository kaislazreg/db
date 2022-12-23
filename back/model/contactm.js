const mongoose = require('mongoose')

// nasn3ou schema mta3na

const contactSchema = mongoose.Schema({
    name:String,
    age: Number,
    email:{
        type:String,
        required:true,
        unique:true,
        
    }
    
}, {timestamps:true})
module.exports = mongoose.model('Connect',contactSchema)