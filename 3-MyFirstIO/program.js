let fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
let str = buffer.toString();
let nbLines = str.split('\n').length-1; 
console.log(nbLines);