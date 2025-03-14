// Bronze 2 - 상수
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const [A, B] = input[0].split(' ');

const reversedA = parseInt(A.split('').reverse().join(''));
const reversedB = parseInt(B.split('').reverse().join(''));

console.log(Math.max(reversedA, reversedB));