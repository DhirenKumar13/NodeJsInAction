const MongoClient = require('mongodb').MongoClient;
const test = require('assert');

var url = 'mongodb://localhost:27017/node-todo';
// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
  // Use the admin database for the operation
  var adminDb = db.admin();
  // List all the available databases
  adminDb.listDatabases(function(err, dbs) {
    test.equal(null, err);
    test.ok(dbs.databases.length > 0);
    db.close();
  });
});