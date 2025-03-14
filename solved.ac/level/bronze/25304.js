// Bronze 4 - 영수증
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const X = parseInt(input[0]);
const N = parseInt(input[1]);

let result = 0;

for (let i = 1; i <= N; i++) {
    const value = input[i + 1].split(' ');
    result += (parseInt(value[0]) * parseInt(value[1]));
}

if (result === X) {
    console.log("Yes");
} else {
    console.log("No");
}