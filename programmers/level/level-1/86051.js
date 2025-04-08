// level 1 - 없는 숫자 더하기(구현)
function solution(numbers) {
    let total = 0;

    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) total += i;
    }

    return total;
}