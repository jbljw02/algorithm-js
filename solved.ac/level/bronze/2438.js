// Bronze 5 - 별 찍기 - 1
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const N = parseInt(input[0]);

let result = '';

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);