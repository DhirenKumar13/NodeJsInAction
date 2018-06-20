const express = require('express');

var app = express();

app.get('/', (request, response) => {
    response.send({
        name : 'Dhiren',
        age : 24,
        likes : [
            'Biking',
            'Cricket',
            'Movies'
        ]
    });
});

app.get('/about', (request, response) => {
    response.send('Hello Express !!');
});

app.get('/bad', (request, response) => {
    response.send({
        errorCode : 'ER0023',
        errorMessage : 'Failed to get the requested resource'
    });
});

app.listen(3000 ,() => {
    console.log('Server is running on PORT 3000 ...');
});