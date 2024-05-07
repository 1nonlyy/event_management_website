const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    registeredEvents: {
        type: [{
            event: {type: Schema.Types.ObjectId, ref: 'events'}
        }],
        default: []
    }
});

module.exports = mongoose.model('RegisterModel', RegisterSchema);