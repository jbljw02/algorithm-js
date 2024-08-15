const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const str = input[i];
    console.log(str[0] + str[str.length - 1]);
}