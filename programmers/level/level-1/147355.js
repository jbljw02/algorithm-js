// level 1 - 문자열 나누기(투 포인터)
function solution(t, p) {
    let count = 0;

    // 문자열 t만큼 순회
    for (let i = 0; i < t.length; i++) {

        // 문자열 t의 부분 문자열 추출(시작 위치 ~ 시작 위치 + p의 길이)
        const str = t.substring(i, p.length + i);

        // 부분 문자열의 길이가 p의 길이와 같고, 부분 문자열이 p보다 작거나 같을 경우
        if (str.length === p.length && Number(str) <= Number(p)) {
            count++;
        }
    }

    return count;
}