// Bronze 5 - 사분면 고르기
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const x = parseInt(input[0]);
const y = parseInt(input[1]);

if (x > 0 && y > 0) {
    console.log("1");
} else if (x < 0 && y > 0) {
    console.log("2");
} else if (x < 0 && y < 0) {
    console.log("3");
} else if (x > 0 && y < 0) {
    console.log("4");
}