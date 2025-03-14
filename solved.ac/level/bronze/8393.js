// Bronze 5 - 합
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

const n = parseInt(input[0]);

let result = 0;

for (let i = 1; i <= n; i++) {
    result += i;
}

console.log(result);