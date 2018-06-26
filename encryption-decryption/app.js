'Use strict';

const application = require('./application');
const Service = require('./service');
const Cypher = require('./encryption');
const CypherAdv = require('./encryption/encryption_iv');

const service = new Service();
const cypher = new Cypher('abcdefgs');
const cypherAdv = new CypherAdv('thisstringistherawkey01234567890');

const stringToEncode = process.argv[2];

console.log(application.hello('Dhiren'));
console.log(application.helloToWorld('Dhiren'));
console.log(service.greetMorning('Dhiren'));
console.log(service.greetNight('Dhiren'));

let encodedString = cypher.encrypt(stringToEncode);
let decodedString = cypher.decrypt(encodedString);
let encodedStringAdv = cypherAdv.encrypt(stringToEncode);
let decodedStringAdv = cypherAdv.decrypt(encodedStringAdv);

console.log(`Encrypted version of ${stringToEncode} is ${encodedString} `);
console.log(`Decrypted version of ${encodedString} is ${decodedString} `);
console.log(`Encrypted Advanced version of ${stringToEncode} is ${encodedStringAdv} `);
console.log(`Decrypted Advanced version of ${encodedStringAdv} is ${decodedStringAdv} `);

/**
 * Hello Dhiren
   Hello World From Dhiren
   Good Morning Dhiren
   Good Night Dhiren
   Encrypted version of Dhiren is bae82f6764ee
   Decrypted version of bae82f6764ee is Dhiren
 */