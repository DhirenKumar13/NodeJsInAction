const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/node-todo',(error,db) => {
    if(error){
        return console.log('Unable to connect to mongodb ..');
    }
    console.log('Mongodb connected successfully...');

    let collection = db.collection('users');

    collection.insertOne({
        name : 'Alexander',
        age : 28,
        locations : 'Mumbai'
    }, (error ,result) => {
        if(error) {
            return console.log('Failed to insert ...');
        }
        console.log('Successfully inserted into db ...');
        console.log(JSON.stringify(result.ops ,undefined, 2));
    });

    collection.insertOne({
        name : 'Virat',
        age : 29,
        locations : 'Delhi'
    }, (error ,result) => {
        if(error) {
            return console.log('Failed to insert ...');
        }
        console.log('Successfully inserted into db ...');
        console.log(JSON.stringify(result.ops ,undefined, 2));
    });

    db.close();
});