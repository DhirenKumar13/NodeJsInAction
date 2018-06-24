const { MongoClient, ObjectID } = require('mongodb');

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

    collection.deleteMany({ "text": "Watch Khan academy courses" }).then((docs) => {
        console.log('List of deleted tasks .....');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch docs', err);
    });

    collection.find().toArray().then((docs) => {
        console.log('List of all tasks .....');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch docs', err);
    });

    collection.findOneAndDelete({"text": "Getting ready for views"}).then((result) => {
        console.log(JSON.stringify(result), undefined, 2 );
    },(error) => {
        console.log('Error occured ..',error);
    });

    db.close();
});