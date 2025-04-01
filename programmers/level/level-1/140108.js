// level 1 - 문자열 나누기(구현)
function solution(s) {
    let currentChar = s[0]; // 현재 처리 중인 문자
    let count = 0; // 분해 문자열 개수

    // 문자 카운터 객체
    const counter = {
        same: 0,      // 첫 문자와 같은 문자의 개수
        different: 0   // 첫 문자와 다른 문자의 개수
    };

    s.split('').forEach((char, index) => {
        // 현재 문자가 기준 문자와 같은지 확인하여 카운트
        if (char === currentChar) {
            counter.same++;
        } else {
            counter.different++;
        }

        // 같은 문자 개수와 다른 문자 개수가 같아지면 분해
        if (counter.same === counter.different) {
            count++;

            // 카운터 초기화
            counter.same = 0;
            counter.different = 0;

            // 다음 문자를 새로운 기준 문자로 설정
            currentChar = s[index + 1];
        }
    });

    // 남은 문자열이 있다면 하나의 분해 문자열로 처리
    if (counter.same || counter.different) {
        count++;
    }

    return count;
}