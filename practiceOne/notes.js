console.log('Module notes.js');
module.exports.age=24;

var counter = 1;

module.exports.addNote = () => {
    console.log('addNote() method called');
    return 'NewNote-'+(counter+1) ;
};

module.exports.addNumbers = (a,b) => {
    return a+b;
}