const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const name = input[0];

console.log(name + '??!')