const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : '../test.txt';
let input = fs.readFileSync(file).toString().split('\n');

const N = parseInt(input[0]);

let count = 0;

for (let i = 1; i <= N; i++) {
    let seen = new Set(); // 이미 본 문자를 저장할 Set
    let isGroup = true; // 그룹 단어 여부 체크

    for (let j = 0; j < input[i].length; j++) {
        const char = input[i][j];

        // 문자가 이전 문자와 같지 않고, 이미 등장한 적이 있으면 그룹 단어가 아님
        if (seen.has(char) && input[i][j - 1] !== char) {
            isGroup = false;
            break; // 그룹 단어가 아님이 확정되면 루프 탈출
        }
        seen.add(char); // 문자를 Set에 추가
    }

    if (isGroup) {
        count += 1;
    }
}

console.log(count);