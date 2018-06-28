'Use strict';
const helpers = require('../helpers');
const passport = require('passport');

module.exports = () => {
    let routes = {
        'get' : {
            '/' : (req,res,next) => {
                res.render('login');
            },
            '/rooms' : (req,res,next) => {
                res.render('rooms', {
                    user : req.user.fullName
                });
            },
            '/chatroom' : (req,res,next) => {
                res.render('chatroom');
            },
            '/getSession' : (req,res,next) => {
                res.send('Session color is :'+req.session.color);
            },
            '/setSession' : (req, res,next) => {
                req.session.color = 'WHITE WITH LIGHT BLUE';
                res.send('Session Set');
            },
            '/auth/facebook' : passport.authenticate('facebook'),
            '/auth/facebook/callback' : passport.authenticate('facebook' , {
                successRedirect : '/rooms',
                failureRedirect : '/'
            })
        },
        'post' : {
            '/test' : (req,res,next) => {
                res.send('HTTP Method not supported ...');
            }
        },
        'NA' : (req,res,next) => {
            //res.status(404).sendFile(__dirname+'../../views/404.htm');
            res.status(404).sendFile(process.cwd() +'/views/404.htm');
        }
    };

    return helpers.route(routes);
};