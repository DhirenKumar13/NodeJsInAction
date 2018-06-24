const { MongoClient, ObjectID } = require('mongodb');
const output = require('./outputSeparator');
MongoClient.connect('mongodb://localhost:27017/node-todo', (error, db) => {
    if (error) {
        return console.log('Unable to connect to mongodb ..');
    }
    console.log('Mongodb connected successfully...');

    let collection = db.collection('todo-list');

    collection.find().toArray().then((docs) => {
        console.log('List of all tasks .....');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch docs', err);
    });

    output.consoleOutput('Mongo-Update');
    // 5b2e30df853fbb2d642bc576
    collection.findOneAndUpdate({
        _id : new ObjectID('5b2e30df853fbb2d642bc576')
    }, {
            $set : {
                completed : true
            }
    },{
        returnOriginal : false
    }).then((updatedDoc) => {
        console.log(JSON.stringify(updatedDoc, undefined, 2));
    });

    output.consoleOutput('Mongo-Find');
    
    collection.find().toArray().then((docs) => {
        console.log('List of all tasks .....');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch docs', err);
    });

    db.close();
});