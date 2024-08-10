const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

function solution(arr) {
    const [a, b] = arr[0].split(' ');
    return Number(a) + Number(b);
}