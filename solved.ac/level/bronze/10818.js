// Bronze 3 - 최소, 최대
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const targetArr = input[1].split(' ');
const numArray = targetArr.map(Number);
// = 동일 코드
// const numArray = targetArr.map(function(element) {
//     return Number(element);
// });

console.log(Math.min(...numArray), Math.max(...numArray));