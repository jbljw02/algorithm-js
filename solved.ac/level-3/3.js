const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const n = parseInt(input[0]);

let result = 0;

for (let i = 1; i <= n; i++) {
    result += i;
}

console.log(result);