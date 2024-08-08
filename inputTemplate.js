const fs = require('fs');

// 제출 경로는 /dev/stdin으로 변경
const input = fs.readFileSync('../test.txt').toString().trim().split('\n');

function solution(arr) {
    const [a, b] = arr[0].split(' ');
    return Number(a) + Number(b);
}