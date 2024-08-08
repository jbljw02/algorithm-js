const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[0];
const b = input[1];

console.log(parseInt(a) * parseInt(b[2]));
console.log(parseInt(a) * parseInt(b[1]));
console.log(parseInt(a) * parseInt(b[0]));
console.log(parseInt(a) * parseInt(b));