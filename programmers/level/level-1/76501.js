// level 1 - 음양 더하기(구현)
function solution(absolutes, signs) {
    let sum = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) sum += absolutes[i]; // 참일 때는 양수
        else sum -= absolutes[i]; // 거짓일 때는 음수
    }

    return sum;
}