// Bronze 2 - 바구니 뒤집기
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const [N, M] = input[0].split(' ').map(x => parseInt(x));

const basket = Array.from({ length: N }, (_, index) => index + 1);

for (let i = 1; i <= M; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    let arr = [];

    for (let j = a - 1; j < b; j++) {
        arr.push(basket[j]);
    }

    arr.reverse();
    basket.splice(a - 1, b - a + 1, ...arr); // 1, 2번째 파라미터를 통해 제거된 인덱스에 arr이 삽입됨
}

console.log(basket.join(' '));