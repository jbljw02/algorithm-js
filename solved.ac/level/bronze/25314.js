// Bronze 5 - 코딩은 체육과목 입니다
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

const N = parseInt(input[0]);

console.log(`${"long ".repeat(N / 4)}int`)