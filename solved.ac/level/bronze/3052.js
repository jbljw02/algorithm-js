// Bronze 2 - 나머지
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const setArr = new Set(input.map(num => num % 42));

console.log(setArr.size);