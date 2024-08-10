const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const N = parseInt(input[0]);

let result = '';

for (let i = 1; i <= N; i++) {
    let blank = ' '.repeat(N - i);
    let stars = '*'.repeat(i);
    result += blank + stars + '\n';
}

console.log(result);