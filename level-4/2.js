const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const target = input[0].split(' ')[1];

const targetArr = input[1].split(' ');

const count = targetArr.filter(value => parseInt(value) < target);

console.log(count.join(' '));