// console.log('Module notes.js');

const fs = require('fs');
var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (err) {
        console.log(err);
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title , body) => {
    var notes = fetchNotes();
    var note = {
        title : title, // ES5 Style
        body //ES6 Style
    }

    // var duplicateNotes = notes.filter( ( note ) => note.title === title ); //ES6 way

    var duplicateNotes = notes.filter( ( note ) => {
        return note.title === title ;
    });

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAllNotes = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter( (note) => note.title === title );
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter( (note) => note.title !== title );
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports = {
    //addNote : addNote, (Same as below line of code)
    addNote,
    getAllNotes,
    getNote,
    removeNote
}