const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0]);

console.log(`${"long ".repeat(N / 4)}int`)