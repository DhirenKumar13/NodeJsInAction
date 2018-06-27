'Use strict';
const express = require('express');
const app = express();

app.set('PORT', process.env.port || 3000);
app.set('view engine','ejs');
// var PORT = process.env.port || 9000;
app.use(express.static('public'));
app.get('/hello' , (req, res, next) => {
    req.greet = 'Hello Dhiren';
    next();
    }, (req, res, next) => {
        req.message = 'Good Morning';
        next();
    }, (req, res) => {
        res.end('<h1> ' + req.greet + ' ' +req.message + '</h1>');
});

app.get('/' , (req, res, next) => {
    res.render('login' , {
        pageTitle : 'My Login Page'
    });
});

app.get('/dashboard' , (req, res, next) => {
    req.greet = 'Welcome Dhiren';
    next();
    }, (req, res, next) => {
        req.message = 'Good Morning';
        next();
    }, (req, res) => {
        res.end('<h1> ' + req.greet + ' ' +req.message + '</h1>');
});

app.listen(app.get('PORT'), () => {
    console.log('Application is started at PORT : ',app.get('PORT'));
});