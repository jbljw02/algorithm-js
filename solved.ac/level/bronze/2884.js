// Bronze 3 - 알람 시계
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split(' ');

let h = parseInt(input[0]);
let m = parseInt(input[1]);

m -= 45;

if (m >= 0) {
    console.log(h, m);
}
else {
    h -= 1;
    m += 60;
    if (h < 0) {
        h = 24 + h;
        console.log(h, m);
    }
    else {
        console.log(h, m)
    }
}