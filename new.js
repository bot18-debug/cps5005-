console.log('hello');
const path = require('path');
console.log(path.basename(__filename));
const _ = require('lodash');
console.log(_.camelCase('hello world'));

const fs = require('fs');


fs.writeFileSync('outputt.txt','hello new file created ')
const data =fs.readFileSync('outputt.txt','utf8');
console.log(data);
console.log(process.argv[2]);

const a = parseFloat(process.argv[5]);
const b = parseFloat(process.argv[6]);
console.log(a+b);


const y= { name: 'John', age: 30 };
fs.writeFileSync('yellow.json', JSON.stringify(y));


const yellow = JSON.parse(fs.readFileSync('yellow.JSON','utf8'));

console.log(yellow);

const multiply = (a,b)=>a*b;
const sum = (a,b)=>a+b;
console.log(sum,(5,10));
console.log(multiply,(5,10));

setTimeout(() => {
 console.log('Hello after 3 seconds');
}, 3000);