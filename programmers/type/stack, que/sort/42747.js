// level 2 - H-Index
function solution(citations) {
    let max = 0;

    // filter: O(n²) => 반복문의 순회마다 또 다시 반복해서 검사
    // sort: O(n) => 반복문의 순회마다 1회만 검사
    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        const h = i + 1; // h값은 1부터 시작

        // 내림차순으로 정렬했기 때문에 해당 인덱스의 값이 h보다 크다면 이전값도 반드시 큼
        // ex) [6, 5, 3, 1, 0]일 때, 어느 인덱스의 값을 검사해도 이전 인덱스의 값은 더 큼
        if (citations[i] >= h) {
            max = h;
        } else {
            break;
        }
    }

    return max;
}