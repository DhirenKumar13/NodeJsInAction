const mongoose = require('mongoose');

mongoose.PromiseProvider = global.PromiseProvider;

mongoose.connect('mongodb://localhost:27017/NodeMongoose');

module.exports = {
    mongoose
};