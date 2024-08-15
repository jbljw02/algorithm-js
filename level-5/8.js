const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const words = input[0].trim().split(' ');
let count = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
        count += 1;
    }
}

console.log(count);