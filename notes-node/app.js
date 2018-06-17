const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe : 'Title of note',
    demand : true ,
    alias : 't'
};

const bodyOptions = {
    describe : 'Content of note',
    demand : true ,
    alias : 'b'
};

// console.log("Process Argv : " ,process.argv);
const yargs_command = yargs
                        .command('add' , 'Add a new note' , {
                            title :  titleOptions,
                            body : bodyOptions
                        })
                        .command('list' , 'list a new note' )
                        .command('read' , 'Read a new note' , {
                            title : titleOptions
                        })
                        .command('remove' , 'Remove a new note' , {
                            title : titleOptions
                        })
                        .help()
                        .argv;
const command = yargs_command._[0];

// console.log("Command Entered is : ",command);
// console.log("Yargs Command Entered is : ",yargs_command);

if(command === "list") {

    var notesReturned = notes.getAllNotes();
    if(notesReturned) {
        notesReturned.forEach( (note) => {
            console.log(note);
        });
    }else {
        console.log('No Notes Found');
    }


}else if(command === "add"){

    var note = notes.addNote(yargs_command.title , yargs_command.body);

    if(note) {
        console.log('Note created with title : ',note.title);
    } else {
        console.log('Note already exists with title : ',yargs_command.title);
    }

}else if(command === "remove") {

    var status = notes.removeNote(yargs_command.title);
    var message = status ? "Notes Removed "+yargs_command.title : "Notes not found "+yargs_command.title;
    console.log(message);

}else if(command === "read") {

    var notesReturned = notes.getNote(yargs_command.title);

    if(notesReturned) {
        console.log("Returned notes is : ",notesReturned);
    } else {
        console.log("Notes not found with title : ",yargs_command.title);
    }

}else {

    console.log("Invalid Command");

}