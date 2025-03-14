// Bronze 4 - 빠른 A+B
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const T = parseInt(input[0]);

let result = '';
for (let i = 1; i <= T; i++) {
    let value = input[i].split(' ');
    result += parseInt(value[0]) + parseInt(value[1]) + '\n'; // 콘솔 출력을 반복하면 시간 초과하기 때문에 하나의 문자열에 담음
}

console.log(result);