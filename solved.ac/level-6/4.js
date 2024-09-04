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