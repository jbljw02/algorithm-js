// Bronze 5 - 1998년생인 내가 태국에서는 2541년생?!
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

const a = parseInt(input[0]);

console.log(a - 543);