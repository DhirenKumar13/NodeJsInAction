const {ObjectID} = require('mongodb');
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

app.get('/todos', (req,res) => {
    Todo.find().then((docs) => {
        res.send({docs , status: 'SUCCESS'});
    },(error) => {
        console.log('Error occured while fetching the data from db..',error);
    });
});

app.get('/todos/:id' ,(req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        console.log('Invalid id passed');
        return res.status(404).send('Invalid id passed');
    } else {
        Todo.findById(id).then((result) => {
            if(!result) {
                return res.status(404).send();
            }
            return res.status(200).send({result});
        }).catch((error) => {
            return res.status(400).send(error);
        });
    }

});

app.listen(3000 , () => {
    console.log('Server started and is listening to port 3000');
});

module.exports = {app};