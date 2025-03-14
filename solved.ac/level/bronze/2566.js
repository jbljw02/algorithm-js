// Bronze 3 - 최댓값
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

let arr = [];

for (let i = 0; i < input.length; i++) {
    const row = input[i].split(' ').map(item => parseInt(item));
    arr.push(row);
}

let max = {
    value: -Infinity, // 무한히 작은 값(무심코 0으로 설정하지 않도록 주의)
    row: 0,
    col: 0,
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        const currentValue = {
            value: arr[i][j],
            row: i + 1,
            col: j + 1,
        }
        if (arr[i][j] > max.value) {
            max = currentValue;
        }
    }
}

console.log(max.value);
console.log(max.row, max.col);