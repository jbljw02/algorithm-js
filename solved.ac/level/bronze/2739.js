// Bronze 5 - 구구단
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

const N = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${N * i}`)
}