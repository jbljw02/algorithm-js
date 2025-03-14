// Bronze 5 - A+B - 3
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    let score = input[i].split(' ');
    console.log(parseInt(score[0]) + parseInt(score[1]));
}