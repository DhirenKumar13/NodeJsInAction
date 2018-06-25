const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo-model');

var correct_id = '5b2fe3a97020370ee0184dcb';

var incorrect_id = '6b2fe3a97020370ee0184dcb';

var invalid_id = '6b2fe3a97020370ee0184dcb11';

var getDataFromMongoUsingMongoose = (id,msg) => {
    console.log('Method called with ',msg);
    if (!ObjectID.isValid(id)) {
        console.log('ID is not valid...');
    }

    else {
        Todo.find({
            _id: id
        }).then((results) => {
            console.log('Using find({})....');
            if (!results) {
                return console.log('No matching id found in the database...');
            }
            console.log(JSON.stringify(results, undefined, 2));
        });

        Todo.findOne({
            _id: id
        }).then((result) => {
            console.log('Using findOne({})....');
            if (!result) {
                return console.log('No matching id found in the database...');
            }
            console.log(JSON.stringify(result, undefined, 2));
        });

        Todo.findById(id).then((result) => {
            console.log('Using findById(id) ....');
            if (!result) {
                return console.log('No matching id found in the database...');
            }
            console.log(JSON.stringify(result, undefined, 2));
        });
    };

}

getDataFromMongoUsingMongoose(correct_id, "CorrectID");
getDataFromMongoUsingMongoose(incorrect_id, "InCorrectID");
getDataFromMongoUsingMongoose(invalid_id, "InvalidID");
