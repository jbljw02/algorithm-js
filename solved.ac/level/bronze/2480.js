// Bronze 4 - 주사위 세개
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if (a === b && b === c) {
    console.log(10000 + a * 1000);
}
else if (a === b || b === c || c === a) {
    const same = (a === b) ? a : (b === c) ? b : c;
    console.log(1000 + same * 100);
}
else {
    const maxValue = Math.max(a, b, c);
    console.log(maxValue * 100);
}