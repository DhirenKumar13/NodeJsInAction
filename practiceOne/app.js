console.log('Application starts here');
console.log('Module app.js');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();
var result = notes.addNote();
var add = notes.addNumbers(100,200);

console.log(user);
console.log(`Hello from ${user.username} and you are ${notes.age}`);
console.log('result is',result);
console.log('Addition is',add);
console.log('Check for string : _isString(\'abc\')==============> ' ,_.isString('abc'));
console.log('Check for string : _isString(123)===============>',_.isString(123));
console.log('Without Duplicates in array : _uniq([1,2,3,2,3,4,1])=============>',_.uniq([1,2,3,2,3,4,1]));


fs.appendFile('greeting.txt', `\n Hello from ${user.username} '!'`, function (err) {
    if (err) {
        console.log('Error Happened :',err);
    }else{
        console.log('Successfully appended to file');
    }
});