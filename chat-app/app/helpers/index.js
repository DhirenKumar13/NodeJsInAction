'Use strict';
const router = require('express').Router();
const db = require('../db');

// iterate through the routes object and mount it with router middleware
let _registerRouts = (routes, method) => {
    for(let key in routes) {
        if(typeof routes[key] === 'object' &&
                routes[key] !== null && !( routes[key] instanceof Array) ) {
                    _registerRouts(routes[key],key);
        } else {
            if(method === 'get') {
                router.get(key, routes[key]);
            } else if (method === 'post') {
                router.post(key, routes[key]);
            } else {
                router.use(routes[key]);
            }
        }
    }
};

let route = (routes) => {
    _registerRouts(routes);
    return router;
};

let findOne = (profileID) => {
    return db.userModel.findOne({
        'profileID' : profileID
    });
};

let createUser = (profile) => {
    return new Promise((resolve, reject) => {
        let newUser = new db.userModel({
            profileID : profile.id,
            fullName : profile.displayName,
            profilePic : profile.photos[0].value || ''
        });

        newUser.save((error) => {
            if(error) {
                console.log('Error while creating user in database...');
                reject(error);
            } else {
                console.log('User created successfully ...');
                resolve(newUser);
            }
        })
    });
};

let findUserById = (id) => {
    return new Promise((resolve, reject) => {
        db.userModel.findById(id, (error, user) => {
            if(error) {
                reject(error);
            } else {
                resolve(user);
            }
        });
    });
};

module.exports = {
    route,
    findOne,
    createUser,
    findUserById
};