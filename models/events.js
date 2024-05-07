const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    mode:{
        type: String,
        required: true
    },
    dateStart:{
        type: Date,
        required: true
    },
    dateEnd:{
        type: Date,
        required: true
    },
    venue:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    registerationFee:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    totalseats: {
        type: String,
        required: true
    },
    registeredUsers: {
        type: [{
            user: {type: Schema.Types.ObjectId, ref: 'RegisterModel'}
        }],
        default: []
    }

});

module.exports = mongoose.model('Event', eventSchema);