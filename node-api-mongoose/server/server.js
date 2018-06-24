const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo-model');
const {User} = require('./models/user-model');

var app = express();

app.use(bodyParser.json());

app.post('/todos' , (req, res) => {
    console.log(`Got a HTTP ${req.method} request with url ${req.url}`)
    if(req.body != null) {
        var todoReceived = new Todo({
            text : req.body.text
        });
        todoReceived.save().then((docs) => {
            res.send(docs);
        }, (err) => {
            res.send("ERROR Occured : " ,err);
        });

    }else {
        res.send('Request can\'t be empty');
    }
});

app.listen(3000 , () => {
    console.log('Server started and is listening to port 3000');
});

module.exports = {app};