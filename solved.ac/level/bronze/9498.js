// Bronze 5 - 시험 성적
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

const a = parseInt(input);

if (a >= 90 && a <= 100) {
    console.log("A");
} else if (a >= 80 && a <= 89) {
    console.log("B");
} else if (a >= 70 && a <= 79) {
    console.log("C");
} else if (a >= 60 && a <= 69) {
    console.log("D");
} else {
    console.log("F");
}