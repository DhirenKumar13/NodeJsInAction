const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname +'/views/partials')
app.set('view engine', hbs);

hbs.registerHelper('year' ,() => {
    return new Date().getFullYear();
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var time = new Date().toString();
    console.log(time);
    console.log(req.method);
    console.log(req.url);
    let log = `The request method is ${req.method} and the URI is ${req.url}`;
    console.log(log);
    fs.appendFile('server.log',log + '\n', (error) => {
        if(error) {
            console.log('Error occured while appending the file ...');
        }
    })
    next();
})

app.get('/', (request, response) => {
    response.send({
        name: 'Dhiren',
        age: 24,
        likes: [
            'Biking',
            'Cricket',
            'Movies'
        ]
    });
});

app.get('/about', (request, response) => {
    response.send('Hello Express !!');
});

app.get('/help', (request, response) => {
    response.render('index.hbs', {
        user:"Dhiren",
    });
});

app.get('/bad', (request, response) => {
    response.send({
        errorCode: 'ER0023',
        errorMessage: 'Failed to get the requested resource'
    });
});

app.listen(3000, () => {
    console.log('Server is running on PORT 3000 ...');
});