function solution(arr) {
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        // 이후 숫자와 다를 경우 스택에 추가
        if (arr[i] !== arr[i - 1]) {
            stack.push(arr[i]);
        }
    }

    return stack;
}