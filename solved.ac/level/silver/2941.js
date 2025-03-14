// Silver 5 - 크로아티아 알파벳
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

let word = input[0];

const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

// 배열에서 요소를 하나씩 꺼내고,
for (let x of croatian) {
    // 일치하는 요소는 모두 한 글자인 'x'로 변경함
    word = word.replaceAll(x, 'x');
}

console.log(word.length);