const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(arr) {
    const [a, b] = arr[0].split(' ');
    return Number(a) + Number(b);
}

console.log(solution(input));