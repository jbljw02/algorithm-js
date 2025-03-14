// Bronze 3 - 최댓값
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const numberArr = input.map(Number);
const maxVal = Math.max(...numberArr);

console.log(maxVal);
console.log(numberArr.indexOf(maxVal) + 1);