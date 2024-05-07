const mongoose = require('mongoose')

const eventRegistration = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    phnumber:{
        type:Number,
        required:true 
    },
    event:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('eventRegistration', eventRegistration);