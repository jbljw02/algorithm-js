// level 1 - 가장 가까운 같은 글자(구현)
function solution(s) {
    const arr = [];

    // 문자열 s만큼 순회
    for (let i = 0; i < s.length; i++) {
        let distance = -1; // 문자열과 같은 문자가 나오는 위치까지의 거리

        // 이전 문자부터 순회를 시작
        for (let j = i - 1; j >= 0; j--) {
            // 같은 문자가 나오면 거리 계산 후 반복 종료(최초로 나온 문자의 거리가 가장 가깝기 때문)
            if (s[i] === s[j]) {
                distance = i - j;
                break;
            }
        }

        arr.push(distance);
    }

    return arr;
}