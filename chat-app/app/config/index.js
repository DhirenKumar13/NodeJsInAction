'use strict';

if(process.env.NODE_ENV === 'production') {
    // Offer production stage configuration
    module.exports = {
        host : process.env.host || "",
        dbURI : process.env.dbURI,
        sessionSecret : process.env.sessionSecret,
        facebook : {
            clientID : process.env.clientID,
            clientSecret : process.env.secret,
            callbackURL : process.env.host +'/auth/facebook/callback',
            profileFields : ["id","displayName","photos"]
        },
        twitter : {
            consumerKey : process.env.consumerKey,
            consumerSecret : process.env.consumerSecret,
            callbackURL : process.env.host +'/auth/twitter/callback',
            profileFields : ["id","displayName","photos"]
        }
    }
} else {
    module.exports = require('./development.json');
}