const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const value = input[i].split(' ');
    console.log(`Case #${i}: ${parseInt(value[0]) + parseInt(value[1])}`)
}