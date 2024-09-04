const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim();
const N = parseInt(input);

for (let i = 1; i <= 2 * N - 1; i++) {
    const stars = i <= N ? 2 * i - 1 : 2 * (2 * N - i) - 1;
    const spaces = (2 * N - 1 - stars) / 2;
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
}