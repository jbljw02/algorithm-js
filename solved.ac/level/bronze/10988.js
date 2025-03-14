// Bronze 3 - 팰린드롬인지 확인하기
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const word = input[0];
const reversedWord = word.split('').reverse().join('');

if (word === reversedWord) {
    console.log(1);
}
else {
    console.log(0);
}