const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

let total = 0;
let creditTotal = 0;

const subjectAvg = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0,
}

for (let i = 0; i < input.length; i++) {
    const subject = input[i].split(' ');
    if (subject[2] === 'P') {
        continue;
    }

    total += Number(subject[1]) * Number(subjectAvg[subject[2]]);
    creditTotal += Number(subject[1]);
}

const avg = total / creditTotal;

console.log(avg);