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
        console.log('Socket.io connected to client');

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


}