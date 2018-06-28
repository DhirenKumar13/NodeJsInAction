'Use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error' , error => {
    console.log('MongoDB error :', error);
});

const chatUserSchema = new Mongoose.Schema({
    profileId : String,
    fullName : String,
    profilePic : String
});

let userModel = Mongoose.model('chatUser', chatUserSchema);

module.exports = {
    Mongoose,
    userModel
};