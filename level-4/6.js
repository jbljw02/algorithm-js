const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const [N, M] = input[0].split(' ').map(x => parseInt(x));
let basket = Array.from({ length: N }, (_, index) => index + 1);

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(x => parseInt(x));
    [basket[a - 1], basket[b - 1]] = [basket[b - 1], basket[a - 1]];
    // = 같은 의미
    // const temp = basket[a - 1];
    // basket[a - 1] = basket[b - 1];
    // basket[b - 1] = temp;
}

console.log(basket.join(' '));