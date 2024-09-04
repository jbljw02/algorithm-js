const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const S = input[0];
const alphabetArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

for (let i = 0; i < alphabetArr.length; i++) {
    const str = alphabetArr[i];
    console.log(S.indexOf(str));
}