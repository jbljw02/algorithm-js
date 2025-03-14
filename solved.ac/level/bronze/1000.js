// Bronze 5 - A+B
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);