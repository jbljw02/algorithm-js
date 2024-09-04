const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const targetArr = input[1].split(' ');
const target = input[2]

const count = targetArr.filter(value => value === target);

console.log(count.length);