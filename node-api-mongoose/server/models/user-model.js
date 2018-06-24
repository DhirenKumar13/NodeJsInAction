const mongoose = require('mongoose');

var User = mongoose.model('User' , {
    name : {
        type: String,
        minLength :1,
        trim: true,
        required : true
    },
    age : {
        type: Number , min : 18
    },
    location : {
        type: String, default: 'Bangalore'
    }
});

module.exports = {
    User
};