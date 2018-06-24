//const {mongoose} = require('./db/mongoose');

const mongoose = require('mongoose');

mongoose.PromiseProvider = global.PromiseProvider;

mongoose.connect('mongodb://localhost:27017/NodeMongoose');

module.exports = {
    mongoose
};

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

var Todo = mongoose.model('Todo' , {
    text : {
        type: String,
        minLength :1,
        trim: true,
        required : true
    },
    completed : {
        type: Boolean,
        default: false,
    },
    completedAt : {
        type: Number,
        default: null
    }
});

var userOne = new User({
    name : 'Shruti',
    age : 23,
    location : 'Hyderabad'
});

var firstTodo = new Todo({
    text : 'Getting Married..'
});

userOne.save().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {
    console.log('ERROR ',error);
});

firstTodo.save().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {
    console.log('ERROR ',error);
});

/**
 * {
  "location": "Delhi",
  "_id": "5b2fe3a97020370ee0184dca",
  "name": "Disha Patani",
  "age": 27,
  "__v": 0
}
{
  "completed": false,
  "completedAt": null,
  "_id": "5b2fe3a97020370ee0184dcb",
  "text": "Prepare for interviews",
  "__v": 0
}
 */