const fs = require('fs');

var originalNote = {
    title : "TitleGoesHere",
    body : "Here is the content"
};

var originalString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);

console.log("Title : ", note.title);

console.log("Body : ", note.body);