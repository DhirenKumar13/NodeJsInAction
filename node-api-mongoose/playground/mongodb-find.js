const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/node-todo', (error, db) => {
    if (error) {
        return console.log('Unable to connect to mongodb ..');
    }
    console.log('Mongodb connected successfully...');

    db.collection('todo-list').find().toArray().then((docs) => {
        console.log('List of all tasks .....');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch docs', err);
    });

    db.collection('todo-list').find({ "completed": false }).toArray().then((docs) => {
        console.log('List of uncompleted tasks .....');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch docs', err);
    });

    db.collection('todo-list').find(
        {
            "_id": new ObjectID('5b2e25a823a6e24fb0a13e2b')
        }).toArray().then((docs) => {
            console.log('List of uncompleted tasks based on ObjectID .....');
            console.log(JSON.stringify(docs, undefined, 2));
        }).catch((err) => {
            console.log('Unable to fetch docs', err);
        });


    db.collection('todo-list').find().count().then((docs) => {
        console.log('Count of all tasks .....');
        console.log(docs +' is the count of all tasks ...');
    }, (err) => {
        console.log('Unable to fetch docs', err);
    });

    db.close();
});