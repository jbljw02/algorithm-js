// Bronze 4 - 숫자의 합
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

// 두 번째 줄의 숫자들을 배열로 변환하고 합계 계산
const sum = input[1].split('').reduce((acc, cur) => acc + parseInt(cur), 0);

console.log(sum);