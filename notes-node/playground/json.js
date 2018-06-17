var obj = {
    name : "Dhiren"
};

var jsonString = JSON.stringify(obj);

console.log("obj type is : " , typeof obj);

console.log("jsonString type is : " , typeof jsonString);

console.log(jsonString);

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

var personString = '{"name" : "Dhiren" , "age" : 24}';

var personObj = JSON.parse(personString);

console.log("personObj type is : " , typeof personObj);

console.log("jsonString type is : " , typeof personString);

console.log(personObj);

console.log("Name of person : ", personObj.name);

console.log("Age of person : ", personObj.age);