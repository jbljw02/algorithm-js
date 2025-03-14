// Bronze 5 - 아스키 코드
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const str = input[0];
console.log(str.charCodeAt(0));