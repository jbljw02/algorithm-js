// Bronze 5 - 단어 길이 재기
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const str = input[0];
console.log(str.length);