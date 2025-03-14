// Bronze 5 - 윤년
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const a = parseInt(input[0]);

if (a % 4 === 0 && a % 100 !== 0) {
    console.log("1");
}
else if (a % 4 === 0 && a % 400 === 0) {
    console.log("1");
} else {
    console.log("0");
}