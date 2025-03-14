// Bronze 3 - 곱셈
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const a = input[0];
const b = input[1];

console.log(parseInt(a) * parseInt(b[2]));
console.log(parseInt(a) * parseInt(b[1]));
console.log(parseInt(a) * parseInt(b[0]));
console.log(parseInt(a) * parseInt(b));