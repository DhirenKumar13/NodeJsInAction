'Use strict';
const router = require('express').Router();
const db = require('../db');
const crypto = require('crypto');

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
        'profileId' : profileID
    });
};

let createUser = (profile) => {
    return new Promise((resolve, reject) => {
        let newUser = new db.userModel({
            profileId : profile.id,
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

let isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
};

let findRoomByRoomName = (existingRooms, newRoom) => {
    let roomAvailablility = existingRooms.findIndex((element, index, array) => {
        if(element.room === newRoom) {
            return true;
        } else {
            return false;
        }
        return roomAvailablility > -1 ? true : false;
    });
};

let uniqueRandomId = () => {
    return crypto.randomBytes(24).toString('hex');
};

let findRoomByRoomId = (existingRooms, newRoomID) => {
    return existingRooms.find((element, index, array) => {
        if(element.roomID === newRoomID) {
            return true;
        } else {
            return false;
        }
    });
};

let addUserToRoom = (existingRooms, userData, socket) => {
    let getRoom = findRoomByRoomId(existingRooms, userData.roomID);
    console.log(getRoom);
    if(getRoom !== undefined) {
        //Getting the userID from session
        let userID = socket.request.session.passport.user;

        //check whether user is already exist or not
        let checkUser = getRoom.user.findIndex((element, index, array) => {
            if(element.userID === userID) {
                return true;
            } else {
                return false;
            }
        });
        if(checkUser > -1) {
            getRoom.user.splice(checkUser, 1);
        }
        // now add user data to user array present in room
        getRoom.user.push({
            socketID : socket.id,
            userID ,
            user : userData.user,
            userPic : userData.userPic
        });

        socket.join(userData.roomID);
        return getRoom;
    }

};

let removeUserDataFromRoom = (existingRooms, socket) => {
    for(let room of existingRooms) {
        let findUser = room.user.findIndex((element, index, array) => {
            return element.socketID === socket.id ? true : false;
        });

        if(findUser > -1) {
            socket.leave(room.roomID);
            room.user.splice(findUser, 1);
            return room;
        }
    }
};

module.exports = {
    route,
    findOne,
    createUser,
    findUserById,
    isAuthenticated,
    findRoomByRoomName,
    uniqueRandomId,
    findRoomByRoomId,
    addUserToRoom,
    removeUserDataFromRoom
};