const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

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