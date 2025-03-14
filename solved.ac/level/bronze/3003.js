// Bronze 5 - 킹, 퀸, 룩, 비숍, 나이트, 폰
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split(' ');

const value = input.map(x => parseInt(x));
const answer = [1, 1, 2, 2, 2, 8];
const result = answer.map((item, index) => item - value[index]);

console.log(result.join(' '));