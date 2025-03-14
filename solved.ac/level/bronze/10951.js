// Bronze 5 - A+B - 4
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let value = input[i].split(' ');
    console.log(parseInt(value[0]) + parseInt(value[1]));
}