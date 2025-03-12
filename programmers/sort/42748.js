// level 1 - K번째 수
function solution(array, commands) {
    const answer = [];

    for (let i = 0; i < commands.length; i++) {
        const curArr = commands[i];

        // 자를 시작 인덱스, 끝 인덱스, 찾을 인덱스
        // 배열은 0부터 시작하므로 시작 인덱스와 찾을 인덱스에 - 1
        const [startIdx, endIdx, targetIdx] = curArr;

        const arr = array.slice(startIdx - 1, endIdx);
        arr.sort((a, b) => a - b);
        answer.push(arr[targetIdx - 1]);
    }

    return answer;
}