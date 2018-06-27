'Use strict';
const express = require('express');
const app = express();
const chatapp = require('./app');

app.set('PORT', process.env.port || 3000);
app.set('view engine','ejs');
// var PORT = process.env.port || 9000;
app.use(express.static('public'));

app.use(chatapp.session);
app.use('/',chatapp.router);

app.listen(app.get('PORT'), () => {
    console.log('Application is started at PORT : ',app.get('PORT'));
});