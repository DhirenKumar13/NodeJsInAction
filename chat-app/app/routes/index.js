'Use strict';
const helpers = require('../helpers');
const passport = require('passport');
const config = require('../config');
module.exports = () => {
    let routes = {
        'get' : {
            '/' : (req,res,next) => {
                res.render('login');
            },
            '/rooms' : [helpers.isAuthenticated , (req,res,next) => {
                res.render('rooms', {
                    user : req.user.fullName,
                    host : config.host
                });
            }],
            '/chatroom' : [helpers.isAuthenticated, (req,res,next) => {
                res.render('chatroom' , {
                    user : req.user,
                    host : config.host
                });
            }],
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
            }),
            '/auth/twitter' : passport.authenticate('twitter'),
            '/auth/twitter/callback' : passport.authenticate('twitter' , {
                successRedirect : '/rooms',
                failureRedirect : '/'
            }),
            '/logout' : (req, res, next) => {
                req.logout();
                res.redirect('/');
            }
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