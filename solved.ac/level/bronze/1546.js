// Bronze 1 - 평균
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const N = parseInt(input[0]);

const arr = input[1].split(' ').map(Number);
const M = Math.max(...arr);

// sum에 조작한 점수를 담고, 마지막에 N으로 나눠서 평균을 구함
const avg = arr.reduce((sum, value) => sum + (value / M * 100), 0) / N;

console.log(avg);