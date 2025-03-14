// Bronze 3 - 오븐 시계
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

let a = parseInt(input[0].split(' ')[0]);
let b = parseInt(input[0].split(' ')[1]);
let c = parseInt(input[1]);

let minute = b + c

if (minute < 60) {
    console.log(a, minute);
}
else {
    a += Math.floor(minute / 60);
    if (a >= 24) {
        a -= 24;
    }

    console.log(a, minute % 60);
}