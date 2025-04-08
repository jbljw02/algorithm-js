// level 1 - 나머지가 1이 되는 수 찾기(구현)
function solution(n) {
    for (let i = 2; i <= n; i++) {
        const remain = n % i;

        // 제일 작은 수를 찾는 것이므로 발견 시 바로 종료
        if (remain === 1) return i;
    }
}