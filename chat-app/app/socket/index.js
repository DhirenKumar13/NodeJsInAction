'use strict';
const helper = require('../helpers');
module.exports = (io,app) => {

    let rooms = app.locals.chatrooms;

    /* rooms.push({
        roomID : 'Room1',
        room : 'Cloud Computing ...',
        user : []
    });

    rooms.push({
        roomID : 'Room2',
        room : 'Data Engineering ...',
        user : [{
            socketID : 'S001',
            userID : 'US001',
            user : 'Dhiren',
            userPic : 'Dhiren Kumar'
        }]
    }); */

    io.of('/roomsList').on('connection', (socket) => {
        console.log('/roomsList connected to client');

        socket.on('getChatRooms' , () => {
            socket.emit('chatRoomsList', JSON.stringify(rooms));
        });

        socket.on('createRoom', (createRoom) => {
            //checking if same room exists or not ...
            if(! helper.findRoomByRoomName(rooms , createRoom)){
                //if not exist create a new room and broadcast to everyone...
                rooms.push({
                    room : createRoom,
                    roomID : helper.uniqueRandomId(),
                    user: []
                });
            }
            socket.emit('chatRoomsList', JSON.stringify(rooms));
            socket.broadcast.emit('chatRoomsList', JSON.stringify(rooms));
        });
    });

    io.of('/chatter').on('connection' , (socket) => {
        console.log('/chatter connected to client');
        socket.on('join', (user) => {
            console.log(user);
            let userList = helper.addUserToRoom(rooms, user , socket);
            console.log('UsersList : ', userList);
            socket.to(user.roomID).emit('updateUserList', JSON.stringify(userList.user));
            socket.emit('updateUserList', JSON.stringify(userList.user));
        });

        socket.on('disconnect' ,() => {
            let room = helper.removeUserDataFromRoom(rooms, socket);
            socket.broadcast.to(room.roomID).emit('updateUserList', JSON.stringify(room.user));
        });

    });

}