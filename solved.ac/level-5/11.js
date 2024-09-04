const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString();

console.log(input);