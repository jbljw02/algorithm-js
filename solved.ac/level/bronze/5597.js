// Bronze 3 - 과제 안 내신 분..?
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(x => parseInt(x));

const allNumbers = Array.from({ length: 30 }, (_, index) => index + 1);
const missingNumbers = allNumbers.filter((num) => !input.includes(num));

missingNumbers.forEach(num => console.log(num));