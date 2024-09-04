const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const wordArr = input[0].toUpperCase().split('');

const charCounts = {};

for (const char of wordArr) {
    // chartCounts[char]이 존재하지 않으면 undefined이므로 0이 반환되고 거기에 1을 더함(0이 아니라 1로 초기값 설정)
    // 존재한다면 charCounts[char]에 1을 더해줌
    charCounts[char] = (charCounts[char] || 0) + 1;
}

let maxItem = { char: '', count: 0, isDuplicate: false };

for (let char in charCounts) {
    const count = charCounts[char]; // charCounts.chart: 점 표기법은 'char'이 문자열로 사용됨

    // 카운트가 maxItem보다 작은 경우는 고려할 필요 X. 가장 큰 수를 구하는 것이기 때문

    // 카운트가 maxItem보다 크다면 maxItem 갱신
    // 앞에서 중복 여부가 true가 됐다고 하더라도 더 큰 수가 나오면 false로 갱신
    if (count > maxItem.count) {
        maxItem = { char, count, isDuplicate: false };
    }
    // 값이 동일하다면 중복 여부를 true로 변경
    else if (count === maxItem.count) {
        maxItem.isDuplicate = true;
    }
}

console.log(maxItem.isDuplicate ? '?' : maxItem.char);