// Bronze 5 - 문자와 문자열
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const S = input[0];
const i = parseInt(input[1]);

console.log(S[i - 1]);