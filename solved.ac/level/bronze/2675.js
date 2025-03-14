// Bronze 2 - 문자열 반복
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
    const R = parseInt(input[i].split(' ')[0]);
    const str = input[i].split(' ')[1];

    let result = '';

    for (let j = 0; j < str.length; j++) {
        for (let k = 0; k < R; k++) {
            result += str[j];
        }
    }

    console.log(result);
}