var num1 = (x) => {
    return x * x;
};
console.log(num1(100));
var num = (x) => x * x;
console.log(num(10));

var person = {
    name : "Dhiren",
    sayHi : () => {
        console.log(arguments);
        console.log(`Hi ${this.name}`); // this prints Hi undefined
    },
    sayHello () {
        console.log(arguments);
        console.log(`Hi ${this.name}`);  // Hi Dhiren
    }
}

person.sayHi(1,2,3);
person.sayHello(1,2,3);