// Bronze 3 - 공 넣기
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const [N, M] = input[0].split(' ').map(x => parseInt(x));
const baskets = Array(N).fill(0); // N의 길이를 가진 배열을 생성하고 값을 0으로 채움

for (let i = 1; i <= M; i++) {
    const [basket1, basket2, ballNum] = input[i].split(' ').map(x => parseInt(x));

    for (let j = basket1; j <= basket2; j++) {
        baskets[j - 1] = ballNum;
    }
}

console.log(baskets.join(' '));