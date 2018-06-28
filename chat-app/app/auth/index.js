'Use strict';

//express npm modules
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

//user defined modules
const helper = require('../helpers');
const config = require('../config');

module.exports = () => {

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((id, done) => {
        helper.findUserById(id)
              .then((user) => done(null, user))
              .catch(error => console.log('Error while serializing user data'));
    });
    let authProcessor = (accessToken, refreshToken, profile, done) => {
        //Find a user in local db using profile.id
        //if user found then no need to go to fb to get it, return the user data by calling done()
        //if not found , create one in local db and then return
        helper.findOne(profile.id)
              .then((result) => {
                  if(result) {
                      done(null, result);
                  } else {
                      helper.createUser(profile)
                            .then(  user  => done(null, user))
                            .catch( error => console.log('Error while creating user ...'));
                  }
              })
    };

    passport.use(new FacebookStrategy(config.facebook, authProcessor));
};