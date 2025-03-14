// Bronze 5 - 나머지
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

console.log((a + b) % c)
console.log(((a % c) + (b % c)) % c)
console.log((a * b) % c)
console.log(((a % c) * (b % c)) % c)
