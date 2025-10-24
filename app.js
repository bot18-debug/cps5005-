//import built-in modules
const express = require("express")
const path = require('path');
const fs = require('fs');
const { json } = require("stream/consumers");

// Show the file name of the current file
console.log("Current file:", path.basename(__filename));

// Read from a file (looger.js must exist in the same folder)
const data = fs.readFileSync('looger.js', 'utf8');
console.log("Contents of looger.js:", data);

// Write new content to a file (correct syntax)
fs.writeFileSync('output.txt', 'hello, this is the new content');

// Confirm writing
console.log("New file created: output.txt");
const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
console.log(a + b);

json.stringify()

data = { name: 'John', age: 30 };
fs.writeFileSync('data.json', JSON.stringify(data));

