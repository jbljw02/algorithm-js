// level 1 - 명예의 전당 (1)(구현)
function solution(k, score) {
    const lowest = []; // 명예의 전당 최하위 점수
    const top = []; // 명예의 전당 점수

    score.forEach(num => {
        // 명예의 전당 점수가 k개 미만인 경우 검사하지 않고 push
        if (top.length < k) {
            top.push(num);
            top.sort((a, b) => b - a);
        }
        // 명예의 전당 점수가 k개 이상인 경우
        else {
            // 명예의 전당의 최하위 점수보다 큰지 확인
            if (top[top.length - 1] < num) {
                top.pop(); // 최하위 점수 제거
                top.push(num); // 현재 점수 추가
                top.sort((a, b) => b - a);
            }
        }

        // 각 반복 마다의 최하위 점수 추가
        lowest.push(top[top.length - 1]);
    });

    return lowest;
}