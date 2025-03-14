// Bronze 3 - 행렬 덧셈
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(value => parseInt(value));

const arr = input.slice(1);

const arrN = [];
const arrM = [];

for (let i = 0; i < N; i++) {
    arrN.push(arr[i].split(' '));
}

for (let i = N; i < 2 * N; i++) {
    arrM.push(arr[i].split(' '));
}

const resultArr = [];

for (let i = 0; i < N; i++) {
    const row = [];
    for (let j = 0; j < M; j++) {
        const sum = parseInt(arrN[i][j]) + parseInt(arrM[i][j]);
        row.push(sum);
    }
    resultArr.push(row);
}

for (let i = 0; i < resultArr.length; i++) {
    let str = '';
    for (let j = 0; j < resultArr[i].length; j++) {
        str = str + (resultArr[i][j] + ' ');
    }
    console.log(str);
}